import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<h1>Todo App</h1>
			<Switch>
				<Route exact path='/'  component={} />
				<Route exact path='/todos'  component={} />
				<Route exact path='/todos/new'  component={} />	
			</Switch>
		</BrowserRouter>
	);
}

export default App;
