import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<nav className='Navbar'>
			<div className='Navbar-brand'>
				<span>Todo App</span>
			</div>
			<ul className='Navbar-links'>
				<li className='Navbar-link'>
					<Link to='/'> Home </Link>
				</li>
				<li className='Navbar-link'>
					<Link to='/todos'> View Todos </Link>
				</li>
				<li className='Navbar-link'>
					<Link to='/todos/new'> Add Todos </Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
