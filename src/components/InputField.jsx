import React from 'react';

export const InputField = ({ text, setText, addTodo }) => {
	return (
		<label>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={addTodo}>add todo</button>
		</label>
	);
};
