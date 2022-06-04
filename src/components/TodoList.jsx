import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, isDone, removeTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
					removeTodo={removeTodo}
					isDone={isDone}
				/>
			))}
		</ul>
	);
};
