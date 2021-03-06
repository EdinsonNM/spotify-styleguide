import React, { ElementType } from "react";
import cn from "../bem";
import "./button.scss";
export type Props = {
	children: React.ReactNode;
	color?:
		| "default"
		| "secondary"
		| "primary"
		| "alternative"
		| "alternative-secondary";
	onClick?: () => void;
	to?: string;
	href?: string;
	target?: string;
	fullwidth?: boolean;
	size?: "sm" | "md";
	buttonAs?: ElementType;
};
const Button: React.FC = (props: Props) => {
	const className = cn("button");
	const {
		children,
		fullwidth = false,
		color = "default",
		size = "md",
		buttonAs: ButtonComponent = "button",
		...buttonProps
	} = props;
	return (
		<ButtonComponent
			className={className({ fullwidth, color, size })}
			{...buttonProps}
		>
			{props.children}
		</ButtonComponent>
	);
};
export default Button;
