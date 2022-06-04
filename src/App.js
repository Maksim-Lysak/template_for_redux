import React, { useState } from 'react';
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
			<label>
				<input
					type='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button onClick={addTodo}>add todo</button>
			</label>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => isDone(todo.id)}
						/>
						<span className={todo.completed ? 'done' : 'text'}>
							{todo.text}
						</span>
						<span onClick={() => removeTodo(todo.id)} className='delete'>
							&times;
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
