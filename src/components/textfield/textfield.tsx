import cn from "../bem";
import React from "react";
import Cleave from "cleave.js/react";

import "./textfield.scss";
import { CleaveOptions } from "cleave.js/options";

export type Props = {
	error?: string;
	fullwidth?: boolean;
	label?: string;
	cleaveOptions?: CleaveOptions;
	withMask?: boolean;
	placeholder?: string;
	key?: string;
};

const Textfield = React.forwardRef<
	HTMLInputElement,
	Props & React.InputHTMLAttributes<HTMLInputElement>
>((props: Props & React.InputHTMLAttributes<HTMLInputElement>, ref) => {
	const {
		error,
		label,
		key,
		fullwidth = false,
		cleaveOptions = {},
		withMask = false,
		placeholder = "",
		...inputProps
	} = props;
	const classess = cn("textfield");
	const inputClass = classess("input", {
		disabled: props.disabled,
	});
	return (
		<div className={classess({ fullwidth })} data-testid="textfield">
			<label className={classess("label", { error: !!error })}>
				{label}
				<div className={inputClass}>
					{withMask ? (
						<Cleave
							key={key}
							placeholder={placeholder}
							options={cleaveOptions}
							{...inputProps}
						/>
					) : (
						<input
							placeholder={placeholder}
							ref={ref}
							{...inputProps}
						/>
					)}
				</div>
				{error && <div className={classess("error")}>{error}</div>}
			</label>
		</div>
	);
});
Textfield.displayName = "Textfield";
export default Textfield;
