import React, { useEffect } from 'react';
import { useGlobalContext } from '../utils/GlobalContext';

function ViewTodos() {
	//this is what we setup in  GlocalContext.js
	const [ state, dispatch ] = useGlobalContext();

	console.log('viewtodo state from useGlbalContext: ', state);

	useEffect(() => {
		async function fetchTodos() {
			try {
				const response = await fetch('/api/todo');
				const json = await response.json();
				// console.log(json.data);
				//==> (json.data) is array of todo obj {_id: , text: ""}, json obj is what we sent out as response from backend {success: true, data}
				//pass arguments to dispacth
				dispatch({ tpye: 'setTodos', payload: json.data });
			} catch (err) {
				console.error(err);
			}
		}
		fetchTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='Todos'>
			<h3 className='Todos-header'>Current Todos</h3>
			<ul className='Todos-list'>
				{/* Todo list goes here. */}
				{state.todos.map(todo => (
					<li key={todo._id} className='Todos-listItem'>
						<span>{todo.text}</span>
						<button onClick={() => console.log('button clicked, delete todo later')}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ViewTodos;
