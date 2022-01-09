import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import DashboardPage from './pages/Dashboard/DashboardPage';
import LandingPage from './pages/Landing/LandingPage';
import './index.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/dashboard" element={<DashboardPage />} />
			</Routes>
		</Router>
	);
}

export default App;
