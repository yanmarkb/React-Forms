import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (newTodo) => {
		setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
	};

	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<NewTodoForm addTodo={addTodo} />
			<div>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						task={todo.task}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
