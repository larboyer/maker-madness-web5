import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faHammer, faTools, faHome, faKeyboard, faUserCircle, faCode, faGift } from '@fortawesome/free-solid-svg-icons';
import { faHammer, faKeyboard, faGift } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/make",
  icon: faHammer,
  label: "Make"
},{
  route: "/code",
  icon: faKeyboard,
  label: "Code"
},{
  route: "/give",
  icon: faGift,
  label: "Give"
}]

const Navigation3 = (props) => {
	return (
		<div>
			{/* Top Bar
			<nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
				....
			</nav>
			*/}
     
			{/* Bottom Tab Navigator*/}
			<nav className="navbar fixed-bottom navbar-light" role="navigation">
				<Nav className="w-100">
					<div className=" d-flex flex-row justify-content-around w-100">
					{
						tabs.map((tab, index) =>(
							<NavItem key={`tab-${index}`}>
								<NavLink to={tab.route} className="nav-link" activeClassName="active">
									<div className="row d-flex flex-column justify-content-center align-items-center">
										<FontAwesomeIcon size="lg" icon={tab.icon}/>
										<div>{tab.label}</div>
									</div>
								</NavLink>
							</NavItem>
						))
					}
					</div>
				</Nav>
			</nav>
		</div>
	)
};

export default Navigation3;
