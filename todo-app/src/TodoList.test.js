import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

test("TodoList component renders without crashing", () => {
	render(<TodoList />);
});

test("TodoList component matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});
