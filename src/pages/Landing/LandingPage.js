import React from 'react';
import Navbar from './components/Navbar';
import './LandingPage.scss';

function LandingPage() {
	return (
		<div>
			<section>
				<div className="color"></div>
				<div className="box">
					<div className="container">
						<Navbar />
					</div>
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
