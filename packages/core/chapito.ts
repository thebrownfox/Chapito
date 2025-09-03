import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";

export interface ChapitoOptions {
	speed?: number;
	gap?: number;
	direction?: "left" | "right";
	draggable?: boolean;
	pauseOnHover?: boolean;
}

// TODO: Add option for vertical scrolling
interface HorizontalLoopConfig extends GSAPTimelineVars {
	speed?: number;
	paddingRight?: string | number;
	draggable?: boolean;
	snap?: boolean | number;
}

interface ChapitoTimeline extends gsap.core.Timeline {
	draggable?: globalThis.Draggable;
	setHoverState?: (hovered: boolean) => void;
	next?: (vars?: gsap.TweenVars) => gsap.core.Tween;
	previous?: (vars?: gsap.TweenVars) => gsap.core.Tween;
	current?: () => number;
	toIndex?: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
	updateIndex?: () => void;
	times?: number[];
}

const horizontalLoop = (
	_items: HTMLElement[],
	config: HorizontalLoopConfig = {},
	gsapInstance: GSAP = gsap,
) => {
	const items = gsapInstance.utils.toArray(_items) as HTMLElement[];

	const animationTimeline = gsapInstance.timeline({
		repeat: config.repeat || -1,
		reversed: config.reversed,
		paused: config.paused,
		defaults: { ease: "none" },
		onReverseComplete: () => {
			animationTimeline.totalTime(
				animationTimeline.rawTime() + animationTimeline.duration() * 100,
			);
		},
	});

	const length = items.length;
	const startX = items[0].offsetLeft;

	const times: number[] = [];
	const widths: number[] = [];
	const xPercents: number[] = [];
	let curIndex = 0;

	// NOTE: Not really pixels per second, but a multiplier for speed
	const pixelsPerSecond = (config.speed || 50) * 10;
	const snap =
		config.snap === false
			? (v: number) => v
			: typeof config.snap === "number"
				? gsapInstance.utils.snap(config.snap)
				: gsapInstance.utils.snap(1);
	let curX: number;
	let distanceToStart: number;
	let distanceToLoop: number;
	let i: number;

	const populateWidths = () =>
		items.forEach((el, i) => {
			widths[i] = parseFloat(
				gsapInstance.getProperty(el, "width", "px") as string,
			);
			xPercents[i] = snap(
				(parseFloat(gsapInstance.getProperty(el, "x", "px") as string) /
					widths[i]) *
					100 +
					(gsapInstance.getProperty(el, "xPercent") as number),
			);
		});

	const getTotalWidth = () =>
		items[length - 1].offsetLeft +
		(xPercents[length - 1] / 100) * widths[length - 1] -
		startX +
		items[length - 1].offsetWidth *
			(gsapInstance.getProperty(items[length - 1], "scaleX") as number) +
		(parseFloat(config.paddingRight as string) || 0);

	populateWidths();

	let totalWidth: number = getTotalWidth();

	gsapInstance.set(items, {
		x: 0,
		xPercent: (i: number) => xPercents[i],
	});

	for (i = 0; i < length; i++) {
		const item = items[i];
		curX = (xPercents[i] / 100) * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop =
			distanceToStart +
			widths[i] * (gsapInstance.getProperty(item, "scaleX") as number);

		animationTimeline
			.to(
				item,
				{
					xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
					duration: distanceToLoop / pixelsPerSecond,
				},
				0,
			)
			.fromTo(
				item,
				{
					xPercent: snap(
						((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
					),
				},
				{
					xPercent: xPercents[i],
					duration:
						(curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
					immediateRender: false,
				},
				distanceToLoop / pixelsPerSecond,
			)
			.add(`label${i}`, distanceToStart / pixelsPerSecond);

		times[i] = distanceToStart / pixelsPerSecond;
	}

	const setIndex = (newIndex: number) => {
		curIndex = newIndex;
	};

	const toIndex = (index: number, _vars: gsap.TweenVars | undefined) => {
		const vars = _vars || {};
		if (Math.abs(index - curIndex) > length / 2) {
			index += index > curIndex ? -length : length;
		}
		let newIndex = gsapInstance.utils.wrap(0, length, index),
			time = times[newIndex];

		const goingForward = index > curIndex;
		const timeIsAhead = time > animationTimeline.time();

		if (timeIsAhead !== goingForward) {
			vars.modifiers = {
				time: gsapInstance.utils.wrap(0, animationTimeline.duration()),
			};
			time += animationTimeline.duration() * (index > curIndex ? 1 : -1);
		}
		curIndex = newIndex;
		vars.overwrite = true;
		return animationTimeline.tweenTo(time, {
			...vars,
			onComplete: () => {
				setIndex(newIndex);
				if (typeof vars.onComplete === "function") vars.onComplete();
			},
		});
	};

	animationTimeline.next = (vars: gsap.TweenVars) =>
		toIndex(curIndex + 1, vars);

	animationTimeline.previous = (vars: gsap.TweenVars) =>
		toIndex(curIndex - 1, vars);

	animationTimeline.current = () => curIndex;

	animationTimeline.toIndex = (index: number, vars: gsap.TweenVars) =>
		toIndex(index, vars);

	animationTimeline.updateIndex = () => {
		setIndex(Math.round(animationTimeline.progress() * (items.length - 1)));
	};

	animationTimeline.times = times;

	animationTimeline.progress(1, true).progress(0, true);

	if (config.reversed) {
		animationTimeline.vars.onReverseComplete?.();
		animationTimeline.reverse();
	}

	if (config.draggable && typeof Draggable === "function") {
		const proxy = document.createElement("div");
		const wrap = gsap.utils.wrap(0, 1);

		let ratio: number;
		let startProgress: number;
		let draggable: globalThis.Draggable;
		let dragSnap: number;
		let roundFactor: number;
		let isDragging = false;
		let resumeTween: gsap.core.Tween | null = null;
		let isHovered = false;

		const align = () => {
			animationTimeline.progress(
				wrap(startProgress + (draggable.startX - draggable.x) * ratio),
			);
		};
		const syncIndex = () => {
			animationTimeline.updateIndex();
		};

		// NOTE: Find the container element (parent of items)
		const container = items[0]?.parentElement;
		if (!container) {
			console.warn(
				"Chapito: Could not find container element for draggable functionality",
			);
			return animationTimeline;
		}

		draggable = Draggable.create(proxy, {
			trigger: container,
			type: "x",
			onPress() {
				isDragging = true;
				// NOTE: We have to kill any existing resume animation to avoid flickering
				if (resumeTween) {
					resumeTween.kill();
					resumeTween = null;
				}

				startProgress = animationTimeline.progress();
				animationTimeline.progress(0);
				populateWidths();
				totalWidth = getTotalWidth();
				ratio = 1 / totalWidth;
				dragSnap = totalWidth / items.length;
				roundFactor = 10 ** (dragSnap.toString().split(".")[1] || "").length;
				animationTimeline.progress(startProgress);

				// NOTE: Immediately pause the timeline
				animationTimeline.timeScale(0);
			},
			onDrag: align,
			onThrowUpdate: align,
			inertia: true,
			onRelease: () => {
				if (!isDragging) return;
				syncIndex();
				// NOTE: Only resume if we're not in the middle of momentum
				if (!draggable.isThrowing) {
					resumeTween = gsap.to(animationTimeline, {
						timeScale: config.reversed ? -1 : 1,
						duration: 0.6,
						ease: "power2.out",
					});
				}
			},
			onThrowComplete: () => {
				isDragging = false;
				syncIndex();
				// NOTE: Only resume if not hovering - this prevents unwanted resume after momentum
				if (!isHovered) {
					resumeTween = gsap.to(animationTimeline, {
						timeScale: config.reversed ? -1 : 1,
						duration: 0.6,
						ease: "power2.out",
					});
				}
			},
		})[0];

		// NOTE: Store the hover state and draggable instance on the timeline for external access
		animationTimeline.setHoverState = (hovered: boolean) => {
			isHovered = hovered;
		};
		animationTimeline.draggable = draggable;
	}

	return animationTimeline;
};

export class Chapito {
		#timeline: ChapitoTimeline | null = null;
		#items: HTMLElement[] = [];
		#isHovered = false;
		#options: Required<ChapitoOptions>;
		#container: HTMLElement | string;
		#gsap: GSAP;
		#context: gsap.Context | null = null;

		constructor(
			container: HTMLElement | string,
			options: ChapitoOptions = {},
			gsapInstance?: GSAP,
		) {
			this.#container = container;
			this.#options = {
				speed: 50,
				gap: 0,
				direction: "left",
				draggable: false,
				pauseOnHover: true,
				...options,
			};
			this.#gsap = gsapInstance || gsap;
			this.#init();
		}

		#init() {
			const containerElement =
				typeof this.#container === "string"
					? (document.querySelector(this.#container) as HTMLElement)
					: this.#container;

			if (!containerElement) {
				throw new Error("Chapito: Container element not found");
			}

			// NOTE: Get all direct children as carousel items
			const children = containerElement.children;
			this.#items = [];
			for (let i = 0; i < children.length; i++) {
				this.#items.push(children[i] as HTMLElement);
			}

			if (this.#items.length === 0) {
				console.warn("Chapito: No items found in container");
				return;
			}
			// NOTE: We put it in context so we can do a proper cleanup
			this.#context = this.#gsap.context(() => {
				if (this.#options.draggable) {
					this.#gsap.registerPlugin(Draggable, InertiaPlugin);
				}

				this.#timeline = horizontalLoop(this.#items, {
					repeat: -1,
					speed: this.#options.speed,
					paddingRight: this.#options.gap,
					reversed: this.#options.direction === "right",
					draggable: this.#options.draggable,
				});

				if (this.#options.pauseOnHover) {
					this.#setupHoverEvents();
				}
			}, this.#container); // Scope to the container element
		}

		#setupHoverEvents() {
			if (!this.#timeline) return;

			for (const item of this.#items) {
				item.addEventListener("mouseenter", () => {
					this.#isHovered = true;
					if (this.#timeline) {
						this.#gsap.to(this.#timeline, { timeScale: 0, overwrite: true });
					}
					// NOTE: Update draggable hover state if available
					if (this.#timeline?.setHoverState) {
						this.#timeline.setHoverState(true);
					}
				});

				item.addEventListener("mouseleave", () => {
					this.#isHovered = false;
					if (this.#timeline) {
						const timeScale = this.#options.direction === "right" ? -1 : 1;
						this.#gsap.to(this.#timeline, { timeScale, overwrite: true });
					}
					// NOTE: Update draggable hover state if available
					if (this.#timeline?.setHoverState) {
						this.#timeline.setHoverState(false);
					}
				});
			}
		}

		// NOTE: Public API methods
		play() {
			if (this.#timeline) {
				this.#timeline.play();
			}
		}

		pause() {
			if (this.#timeline) {
				this.#timeline.pause();
			}
		}

		reverse() {
			if (this.#timeline) {
				this.#timeline.reverse();
			}
		}

		next() {
			if (this.#timeline?.next) {
				this.#timeline.next();
			}
		}

		previous() {
			if (this.#timeline?.previous) {
				this.#timeline.previous();
			}
		}

		goTo(index: number) {
			if (this.#timeline?.toIndex) {
				this.#timeline.toIndex(index);
			}
		}

		getCurrentIndex(): number {
			if (this.#timeline?.current) {
				return this.#timeline.current();
			}
			return 0;
		}

		destroy(shouldRevert: boolean = true) {
			if (this.#timeline) {
				// NOTE: Destroy draggable if it exists
				if (this.#timeline.draggable) {
					this.#timeline.draggable.kill();
				}

				this.#timeline.kill();
				this.#timeline = null;
			}

			if (this.#options.pauseOnHover) {
				// NOTE: Remove event listeners
				for (const item of this.#items) {
					item.removeEventListener("mouseenter", () => {});
					item.removeEventListener("mouseleave", () => {});
				}
			}

			// NOTE: Revert only if specified (default true for full cleanup)
			if (shouldRevert && this.#context) {
				this.#context.revert();
				this.#context = null;
			}

			this.#items = [];
		}

		updateOptions(newOptions: Partial<ChapitoOptions>) {
			this.#options = { ...this.#options, ...newOptions };
			this.destroy();
			this.#init();
		}
	}

// NOTE: Export a factory function for simpler usage
export const createChapito = (
	container: HTMLElement | string,
	options?: ChapitoOptions,
) => new Chapito(container, options);
