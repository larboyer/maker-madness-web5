import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Navigation2 = (props) => {
	return (
		<nav className="py-4 w-full sticky top-0 shadow-md bg-white" role="navigation">
			<div className="mx-auto max-w-3xl">
				<div className="grid grid-cols-2 mx-4 sm:mx-0">
					<a href="/" className="logo text-yellow-600 hover:text-yellow-500 active:text-yellow-500"><FontAwesomeIcon className="fill-current" icon={faLightbulb}/></a>
					<Nav className="flex flex-row space-x-2 place-self-end">
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
			</div>
		</nav>
	)
};

export default Navigation2;
