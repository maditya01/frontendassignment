import React from 'react'
import "../App.css"
const FooterContainer = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();

	return (
		<div>
			<footer class="">
				<div class="container no-tablet no-mobile">
					<div class="row">
						<div class="col">
							<ul>
								<li><b>Services Hub</b></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Home</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Getting Started</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Release Notes</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Give Feedback</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Documentation</a></li>
							</ul>

						</div>
						<div class="col">
							<ul>
								<li><b>Contract</b></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Contract Details</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Manage Access</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Shared Files</a></li>
							</ul>
						</div>
						<div class="col">
							<ul>
								<li><b>Support</b></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Contact Support</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Customer Pulse</a></li>
							</ul>
						</div>
						<div class="col">
							<ul>
								<li><b>Services</b></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Catalog</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Plans</a></li>
							</ul>
						</div>
						<div class="col">
							<ul>
								<li><b>Health</b></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Critical Alerts</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Product Updates</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Office 365 Roadmap</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Assessments</a></li>
							</ul>
						</div>
						<div class="col">
							<ul>
								<li><b>Learning</b></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Learn-on-demand</a></li>
								<li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Workshops</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="container2 footer-main">
					<span><img src="./assets/globe.svg" alt="" /> <span>Current Culture: United States - English</span></span>
					<span class="footer-main-links">
						<a href="#">Contact Us</a> <a href="#">Privacy and Cookies</a> <a href="#">Trademarks</a> <a href="#">About our ads</a> <a href="#" id="copyright">© Microsoft {year} </a>
					</span>
				</div>
			</footer>
		</div>
	)
}

export default FooterContainer