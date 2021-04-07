import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
			<NavLink to="/">Home</NavLink> | <sp/>
			<NavLink to="/takenmake">Take & Make</NavLink> | <sp/>
			<NavLink to="/codejoy">Code Joy</NavLink> | <sp/>
			<NavLink to="/home2">Home2</NavLink> | <sp/>
			<NavLink to="/about">About</NavLink> | <sp/>
			<NavLink to="/contact">Contact</NavLink>
		</div>
	);
}
 
export default Navigation;
