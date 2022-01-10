import React from 'react';
import './Navbar.scss';
import image from '../../../assets/toggle.svg';
function Navbar() {
	return (
		<div className="flex text-white pt-10 justify-between ">
			<div className="flex grow font-semibold text-xl w-1/2 justify-evenly ml-8">
				<span>Explore</span>
				<span>About us</span>
				<span>How It Works</span>
			</div>

			<div className="flex grow justify-end right-container mr-20">
				<div className="btn-signin w-28 flex items-center justify-center p-2 mx-4">
					<span>Sign In</span>
				</div>
				<div className="btn-register w-28 flex items-center justify-center rounded-sm">
					<span>Register</span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
