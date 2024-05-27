import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("Todo component renders without crashing", () => {
	render(<Todo id="1" task="Test Task" removeTodo={() => {}} />);
});

test("Todo component matches snapshot", () => {
	const { asFragment } = render(
		<Todo id="1" task="Test Task" removeTodo={() => {}} />
	);
	expect(asFragment()).toMatchSnapshot();
});

test("Todo component calls removeTodo function when button is clicked", () => {
	const removeTodo = jest.fn();
	const { getByText } = render(
		<Todo id="1" task="Test Task" removeTodo={removeTodo} />
	);
	const button = getByText("X");
	fireEvent.click(button);
	expect(removeTodo).toHaveBeenCalled();
});
