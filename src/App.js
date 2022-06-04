import React, { useState } from 'react';
import { TodoList, InputField } from './components/';
import './App.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	const addTodo = () => {
		if (!text.trim().length) return;
		const newTodo = {
			id: new Date().toISOString(),
			completed: false,
			text,
		};
		setTodos((prev) => [...prev, newTodo]);
		setText('');
	};

	const removeTodo = (id) =>
		setTodos((prev) => prev.filter((todo) => todo.id !== id));

	const isDone = (id) =>
		setTodos((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);

	return (
		<div className='App'>
			<InputField text={text} setText={setText} addTodo={addTodo} />
			<TodoList todos={todos} removeTodo={removeTodo} isDone={isDone} />
		</div>
	);
};
