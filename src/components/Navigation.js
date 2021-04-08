import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
			<NavLink to="/">Home</NavLink> | <sp/>
			<NavLink to="/make">Make</NavLink> | <sp/>
			<NavLink to="/code">Code</NavLink> | <sp/>
			<NavLink to="/give">Give</NavLink> 
		</div>
	);
}
 
export default Navigation;
