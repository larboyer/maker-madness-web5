import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation2 = (props) => {
	return (
		<nav className="navbar navbar-expand-md navbar-light sticky-top" 	role="navigation">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">MM</a>
				<Nav className="ml-auto">
					<NavItem>
						<NavLink to="/make" className="nav-link">
							Make
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/code" className="nav-link">
							Code
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/give" className="nav-link">
							Give
						</NavLink>
					</NavItem>
				</Nav>
			</div>
		</nav>
	)
};

export default Navigation2;
