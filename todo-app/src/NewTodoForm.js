import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
	const [formData, setFormData] = useState({
		task: "",
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo({
			task: formData.task,
		});
		setFormData({
			task: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="task">Task:</label>
			<input
				id="task"
				type="text"
				name="task"
				value={formData.task}
				onChange={handleChange}
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
