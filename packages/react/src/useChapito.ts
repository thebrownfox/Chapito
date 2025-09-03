import { Chapito as ChapitoCore, type ChapitoOptions } from "@chapito/core";
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect =
	typeof document !== "undefined" ? useLayoutEffect : useEffect;

export interface ChapitoMethods {
	play: () => void;
	pause: () => void;
	next: () => void;
	previous: () => void;
	goTo: (index: number) => void;
	getCurrentIndex: () => number;
	destroy: () => void;
	updateOptions: (newOptions: Partial<ChapitoOptions>) => void;
}

export const useChapito = (options: ChapitoOptions) => {
	const chapitoRef = useRef<ChapitoCore | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (containerRef.current) {
			chapitoRef.current = new ChapitoCore(containerRef.current, options);
			return () => {
				if (chapitoRef.current) {
					chapitoRef.current.destroy();
				}
			};
		}
	}, [options.speed, options.gap, options.direction, options.draggable]);

	const methods: ChapitoMethods = {
		play: () => chapitoRef.current?.play(),
		pause: () => chapitoRef.current?.pause(),
		next: () => chapitoRef.current?.next(),
		previous: () => chapitoRef.current?.previous(),
		goTo: (index: number) => chapitoRef.current?.goTo(index),
		getCurrentIndex: () => chapitoRef.current?.getCurrentIndex() ?? 0,
		destroy: () => chapitoRef.current?.destroy(),
		updateOptions: (newOptions: Partial<ChapitoOptions>) =>
			chapitoRef.current?.updateOptions(newOptions),
	};

	return { containerRef, methods };
};
