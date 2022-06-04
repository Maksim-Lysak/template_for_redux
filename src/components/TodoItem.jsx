import React from 'react';

export const TodoItem = ({ id, text, completed, isDone, removeTodo }) => {
	return (
		<li>
			<input type='checkbox' checked={completed} onChange={() => isDone(id)} />
			<span className={completed ? 'done' : 'text'}>{text}</span>
			<span onClick={() => removeTodo(id)} className='delete'>
				&times;
			</span>
		</li>
	);
};
