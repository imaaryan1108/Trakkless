import React from 'react';
import './DisplayCard.scss';
import phone1 from '../../../assets/Phone1.svg';
import phone2 from '../../../assets/Phone2.svg';

function DisplayCard() {
	return (
		<div className="container">
			<div className="flex ">
				<img src={phone1}></img>
				<img className="-ml-2" src={phone2}></img>
			</div>
			<div className="card flex -mt-32 -ml-2 ">
				<div className=" flex flex-col h-3/4 my-auto ml-7 justify-center text-white">
					<span className="text-4xl font-semibold">Easily Accessible</span>
					<span className="text-xl mt-4">Current</span>
					<p className="mt-3 leading-9 pr-3 opacity-70 text-xl">
						Lorem ipsum dolor sit amet. At harum quae non impedit eaque qui tenetur reiciendis Lorem ipsum
						dolor sit amet.
					</p>
				</div>
			</div>
		</div>
	);
}
export default DisplayCard;
