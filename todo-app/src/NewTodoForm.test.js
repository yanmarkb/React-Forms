import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("NewTodoForm component renders without crashing", () => {
	render(<NewTodoForm addTodo={() => {}} />);
});

test("NewTodoForm component matches snapshot", () => {
	const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
	expect(asFragment()).toMatchSnapshot();
});

test("NewTodoForm component can add a new todo", () => {
	const addTodo = jest.fn();
	const { getByLabelText, getByText } = render(
		<NewTodoForm addTodo={addTodo} />
	);

	fireEvent.change(getByLabelText("Task:"), { target: { value: "New Task" } });
	fireEvent.click(getByText("Add Todo"));

	expect(addTodo).toHaveBeenCalledWith({
		task: "New Task",
	});
});
