import styles from "@chapito/core/chapito.module.css";
import React, {
	Children,
	forwardRef,
	type ReactNode,
	useImperativeHandle,
	useRef,
} from "react";
import { type ChapitoMethods, useChapito } from "./useChapito";

export interface ChapitoRef extends ChapitoMethods {}

interface ChapitoProps {
	children: ReactNode;
	speed?: number;
	gap?: number;
	direction?: "left" | "right";
	draggable?: boolean;
	style?: React.CSSProperties;
}

// NOTE: forward ref is not needed in react 19+, but we keep it for backwards compatibility
const Chapito = forwardRef<ChapitoRef, ChapitoProps>(
	(
		{
			children,
			speed = 16,
			gap = 0,
			style = {},
			direction = "left",
			draggable = true,
		},
		ref,
	) => {
		const itemsRef = useRef<HTMLDivElement[]>([]);

		const childrenArray = Children.toArray(children);

		const options = { speed, gap, direction, draggable };
		const { containerRef, methods } = useChapito(options);

		// NOTE: Exposing methods via ref
		useImperativeHandle(ref, () => methods, [methods]);

		return (
			<div
				ref={containerRef}
				className={styles.chapitoContainer}
				style={{ ...style }}
			>
				{/* NOTE: Render original items */}
				{childrenArray.map((child, index) => (
					<div
						key={`original-${React.isValidElement(child) && child.key ? child.key : `child-${index}`}`}
						ref={(el) => {
							if (el) itemsRef.current[index] = el;
						}}
						className={styles.chapitoItem}
						style={{ marginRight: gap }}
					>
						{child}
					</div>
				))}
				{/* NOTE: Render duplicate items for seamless looping */}
				{childrenArray.map((child, index) => (
					<div
						key={`duplicate-${React.isValidElement(child) && child.key ? child.key : `child-${index}`}`}
						ref={(el) => {
							if (el) itemsRef.current[index + childrenArray.length] = el;
						}}
						className={styles.chapitoItem}
						style={{ marginRight: gap }}
					>
						{child}
					</div>
				))}
			</div>
		);
	},
);

Chapito.displayName = "Chapito";
export default Chapito;
