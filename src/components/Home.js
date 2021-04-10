import React from 'react';
import mm_bulb from '../img/mm_bulb_00.png';
import achieve_logo from '../img/achieve_logo_02.png';
import maker_madness from '../img/maker_madness_00.png';
 
const Home = () => {
	return (
		<div className="max-w-xl sm:mx-auto my-8 mx-8">
			<img src={maker_madness} className="achieve-logo" alt="logo" /><br />
			<img src={mm_bulb} className="achieve-logo" alt="logo" /><br />
			<img src={achieve_logo} className="achieve-logo" alt="logo" />
			<p>Home page body content</p>
		</div>
	);
}
 
export default Home;
 
