import React from "react";
import { render } from "@testing-library/react";
import Textfield from "./textfield";

describe("Textfield", () => {
	describe("When initialized", () => {
		test("should render correctly", () => {
			const { getByTestId } = render(<Textfield />);
			const element = getByTestId("textfield");
			expect(element).toHaveClass("aec-textfield");
			expect(element).toBeInTheDocument();
		});
	});
});
