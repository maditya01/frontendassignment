import React from 'react';
import Group51 from '../../assets/img/Group 51.svg'

function MyNavbar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#" aria-label="Brand Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }}>
                    <img src={Group51} />
                </a>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#">Home</a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#">About Us</a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="search" placeholder="Search" style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Replace with your user profile icon */}
                <img src="user-profile.svg" alt="User Profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
            </div>
        </nav>
    );
}

export default MyNavbar;
