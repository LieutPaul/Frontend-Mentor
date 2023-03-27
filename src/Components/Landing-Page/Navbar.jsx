import React from 'react'
import symbol from './images/logo.svg';

import './LandingPage.scss';

export default function Navbar() {
    return (
        <div className="navbar nav">
            <a className="navbar-brand ml-4 mt-2" href="#navbar">
                <img src={symbol} className='navbar-logo' alt="symbol"/>
            </a>
            <div className='md:mt-2' id="navbarText">
                <span className="navbar-text text-black">
                    Features
                </span>
                <span className="navbar-text text-black">
                    Team
                </span>
                <span className="navbar-text text-black">
                    Sign In
                </span>
            </div>
        </div>
    )
}
