import React from "react";
import globeIcon from '../assets/Images/globe.svg';
export const FooterContainer = () => {
    return (
        <div className="three-box p-4">
            <div className="row">
                <div className="col-lg-12 d-none d-lg-block pt-5 ">
                    <div className="row">

                        <div className="col">
                            <ul className="no-bullets">
                                <li><b>Service Hub</b></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Home</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Getting Started</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Release Notes</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Give Feedback</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Documentation</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul className="no-bullets">
                                <li><b>Contract</b></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Contract Details</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Manage Access</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Shared Files</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="no-bullets">
                                <li><b>Support</b></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Contact Support</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Customer Pulse</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="no-bullets">
                                <li><b>Services</b></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Catalog</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Plans</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="no-bullets">
                                <li><b>Health</b></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Critical Alerts</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Product Updates</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Office 365 Roadmap</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Assessments</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="no-bullets">
                                <li><b>Learning</b></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Learn-on-demand</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }}>Workshops</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-5">
                            <div className="col">
                                <img src={globeIcon} alt="" />
                                Current Culture: United States - English
                            </div>
                        </div>
                        <div className="col-7 " style={{ color: '#425656' }}>
                            <div className="row">
                                <div className="col ">Contact Us</div>
                                <div className="col">Privacy and Cookies</div>
                                <div className="col">Trademarks</div>
                                <div className="col">About our ad</div>
                                <div className="col" id="copyright">
                                    © Microsoft 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 d-none d-md-block d-lg-none ">
                <div className="row footer-medium">
                    <div className="col-5">
                        <div className="col">
                            <img src={globeIcon} alt="" />
                            Current Culture: United States - English
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col ">Contact Us</div>
                            <div className="col">Privacy and Cookies</div>
                            <div className="col">Trademarks</div>
                            <div className="col">About our ad</div>
                            <div className="col" id="copyright">
                                © Microsoft 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 d-block d-sm-block d-md-none footer-small">
                <div className="row">
                    <div className="col text-center pb-3">
                        <img src={globeIcon} alt="" />
                        Current Culture: United States - English
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col ">Contact Us</div>
                        <div className="col">Privacy and Cookies</div>
                        <div className="col">Trademarks</div>
                        <div className="col">About our ad</div>
                        <div className="col" id="copyright">
                            © Microsoft 2024
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
