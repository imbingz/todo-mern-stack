import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import AddTodo from './pages/AddTodo';
import Homepage from './pages/Homepage';
import ViewTodos from './pages/ViewTodos';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<GlobalProvider>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/todos' component={ViewTodos} />
					<Route exact path='/todos/new' component={AddTodo} />
				</Switch>
			</GlobalProvider>
		</BrowserRouter>
	);
}

export default App;
