import React from 'react';
import Navbar from './components/Navbar';
import './LandingPage.scss';
import star from '../../assets/Vector.svg';
import DisplayCard from './components/DisplayCard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from '../../assets/logo.svg';
import TwitterLogo from '../../assets/TwitterLogo.svg';
import InstaLogo from '../../assets/InstaLogo.svg';
import FbLogo from '../../assets/FbLogo.svg';

function LandingPage() {
	return (
		<div className="parent-container">
			<div className="color-gradient-top absolute left-0 top-0"></div>
			<div className="color-gradient-rightbottom"></div>
			<img className="logo absolute h-12 w-9 z-50" src={logo} alt="logo"></img>
			<div className="side-nav hidden lg:inline-flex">
				<img className="logo absolute twitter-logo w-10 h-10" src={TwitterLogo} alt="logo"></img>
				<img className="logo absolute fb-logo w-10 h-10" src={FbLogo} alt="logo"></img>
				<img className="logo absolute insta-logo  w-10 h-10" src={InstaLogo} alt="logo"></img>
			</div>

			<div className="relative">
				<Navbar />{' '}
			</div>
			<div className="bottom-container relative flex flex-col w-full ">
				<div className="absolute circle-one opacity-25 hidden lg:inline-flex ">
					<div className="outer mx-auto rounded-full relative m-[10px] w-[1000px] h-[1000px]">
						<div className="inner absolute rounded-full"></div>
					</div>
				</div>
				<div className="absolute circle-two opacity-25 hidden lg:inline-flex  ">
					<div className="outer mx-auto rounded-full relative m-[10px] w-[1000px] h-[1000px]">
						<div className="inner absolute rounded-full"></div>
					</div>
				</div>
				<div className="absolute star pl-14 mt-10 mx-auto hidden lg:inline-block">
					<img src={star} className=""></img>
					<img src={star} className="scale-50 -mt-14 ml-10"></img>
				</div>
				<div className="flex md:flex-row flex-col md:justify-between text-white xl:mt-28 lg:mt-10 md:mt-24 mt-40 ml-6 ">
					<div className="flex flex-col justify-center lg:w-1/3 md:w-1/2 sm:w-3/4 2xl:ml-60 xl:ml-52 lg:ml-40 md:ml-6  lg:mx-0 md:py-12 ">
						<span className="xl:text-7xl md:text-5xl sm:text-6xl text-5xl font-bold ">Trakkless</span>
						<span className="lg:text-xl md:text-lg font-light md:mt-7 md:leading-9 sm:leading-7 pr-3 opacity-70 md:w-full w-3/4 mt-3 ">
							Lorem ipsum dolor sit amet. At harum quae non impedit eaque qui tenetur reiciendis Lorem
							ipsum dolor sit amet.
						</span>
						<div className="flex items-center xl:mt-24 lg:mt-20 mt-10">
							<div className="btn-dashboard w-48 flex items-center justify-center rounded-sm p-2 ">
								<div className="z-10 md:my-0 relative">Open Dashboard</div>
							</div>

							<div className="xl:ml-6 lg:ml-2 flex items-center">
								<span className="xl:ml-14 md:ml-3 sm:ml-5 ml-3 xl:text-xl lg:text-base md:text-sm btn-getstarted whitespace-nowrap">
									Get Started
								</span>
								<ArrowRightIcon className="icon-arrow" />
							</div>
						</div>
					</div>
					<div className="xl:mr-24 lg:mr-16 md:-mr-10 xl:scale-100 lg:scale-75 lg:mx-0 md:scale-75 scale-[0.7]  md:ml-0 lg:ml-0 -ml-14">
						<DisplayCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
