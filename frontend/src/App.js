import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTodo from './pages/AddTodo';
import Homepage from './pages/Homepage';
import ViewTodos from './pages/ViewTodos';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/todos' component={ViewTodos} />
				<Route exact path='/todos/new' component={AddTodo} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
