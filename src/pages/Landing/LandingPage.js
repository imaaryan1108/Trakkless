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
import tutorial from '../../assets/tutorial.svg';

function LandingPage() {
	return (
		<article className="parent-container h-full">
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
			<div className="bottom-container relative flex flex-col w-full">
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
			<div className="flex flex-col text-white  lg:ml-40 sm:ml-12 ml-9 lg:mt-44">
				<span className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
					a new approach to A Better
					<br /> solution for <br /> <span className="font-semibold leading-6">
						{' '}
						Tracking your Journey{' '}
					</span>{' '}
				</span>
				<span className="mt-5 lg:mt-10 w-4/5 sm:w-3/5 text-xs  sm:text-sm lg:text-xl">
					Lorem ipsum dolor sit amet. Ut voluptas officia est enim voluptatem et pariatur temporibus non quae
					delectus et numquam suscipit. Quo repellendus odio ea modi aspernatur At praesentium distinctio quo
					aspernatur provident.Lorem ipsum dolor sit amet. Ut voluptas officia est enim voluptatem et
				</span>
				<div className="flex mt-5 sm:mt-7 md:mt-10 lg:mt-32">
					<button className="sm:w-36 sm:h-10 md:h-12 lg:w-56 lg:h-14 bg-white text-xs sm:text-sm lg:text-base text-black font-bold rounded-md flex justify-center items-center py-1 px-6 ">
						How it works
					</button>
					<button className="sm:w-40 sm:h-10 lg:w-56 lg:h-14 bg-transparent text-xs sm:text-sm lg:text-base text-white ml-8 sm:ml-12 lg:ml-16 font-bold rounded-md border-white border-2 flex justify-center items-center py-1 px-6 ">
						Watch tutorial
					</button>
				</div>
				<div className="mt-28 lg:mt-52 grid grid-cols-2 md:grid-cols-3 md:gap-y-28 lg:gap-y-48 overflow-hidden">
					<img className="lg:scale-150" src={tutorial}></img>
					<img className="lg:scale-150" src={tutorial}></img>
					<img className="lg:scale-150" src={tutorial}></img>
					<img className="lg:scale-150" src={tutorial}></img>
					<img className="lg:scale-150" src={tutorial}></img>
					<img className="lg:scale-150" src={tutorial}></img>
				</div>
			</div>
			<div className="text-white flex justify-between overflow-hidden md:mt-16 lg:mt-48 footer-top py-4 sm:py-6 lg:py-9	">
				<div className="flex justify-center items-center w-3/4 sm:w-4/5 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ml-8 sm:ml-14 lg:ml-28">
					TrakkLess - the most customizable tracking platform for your Placement
				</div>
				<button className="flex justify-center items-center text-xs md:text-sm lg:text-base w-24 sm:w-32 md:w-40 h-6 md:h-10 mt-2 sm:mt-0 mr-6 sm:mr-6 md:mr-12 lg:mr-24 border-2 border-white rounded-3xl">
					Get Started
				</button>
			</div>
			<div className="flex text-white h-24 sm:h-32 md:h-44 items-center footer-bottom">
				<div className="flex flex-col ml-12 lg:ml-52">
					<span className="font-semibold uppercase text-xs sm:text-sm">Who we are</span>
					<span className="text-xs mt-3">About</span>
					<span className="text-xs">Team</span>
				</div>
				<div className="flex flex-col ml-12 lg:ml-24">
					<span className="font-semibold uppercase text-xs sm:text-sm">Other Products</span>
					<span className="text-xs mt-3">Housify</span>
					<span className="text-xs">AvDesigns</span>
				</div>
			</div>
		</article>
	);
}

export default LandingPage;
