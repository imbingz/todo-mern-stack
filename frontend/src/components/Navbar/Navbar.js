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
					<Link to='/'> Homo </Link>
				</li>
				<li>
					<Link to='/todos'> View Todos </Link>
				</li>
				<li>
					<Link to='/todos/neew'> Add Todos </Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
