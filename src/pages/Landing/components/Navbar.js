import React, {useState} from 'react';
import './Navbar.scss';
import logo from '../../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div className="md:flex text-white pt-10 justify-between navbar-container">
			<div
				className={`lg:flex lg:items-center w-full lg:pb-0 pb-12 absolute lg:static transition-all duration-500 ease-in-out ${
					open
						? 'left-0 top-0 opacity-100 w-full z-10 nav-open'
						: '-left-[96] top-0  lg:opacity-100 opacity-0 '
				}`}
			>
				<div className="flex grow flex-col lg:flex-row font-semibold lg:text-xl md:text-lg lg:w-1/4 w-full items-center lg:justify-evenly lg:ml-24 lg:pl-12 lg:mt-0 mt-36 ">
					<span className="lg:my-0 my-5 ">Explore</span>
					<span className="lg:my-0 my-5 ">About us</span>
					<span className="lg:my-0 my-5 whitespace-nowrap">How It Works</span>
				</div>

				<div className="flex flex-col lg:flex-row lg:grow lg:justify-end right-container lg:pr-20 lg:ml-12  ">
					<div className="btn-signin w-28 flex items-center justify-center p-2 lg:mx-4 mx-auto ">
						<span className="z-10 lg:my-0">Sign In</span>
					</div>
					<div className="btn-register w-28 flex items-center justify-center rounded-sm p-2 lg:mx-4 lg:my-0 my-8 mx-auto ">
						<span className="z-10 lg:my-0">Register</span>
					</div>
				</div>
			</div>
			<div
				onClick={() => setOpen(!open)}
				className="absolute right-12 top-14 sm:top-12 cursor-pointer lg:hidden scale-150 z-20 "
			>
				{open ? <CloseIcon /> : <MenuIcon />}
			</div>
		</div>
	);
}

export default Navbar;
