import React from 'react'
import './Intropage.scss'
import logo from './images/logo.svg'
import desktopHero from './images/image-hero-desktop.png'
export default function Intropage() {
    return (
        <div className='intropage overflow-x-hidden'>
            
            <div className='navbar row'>
                <div className='col-5 flex justify-between items-center'>
                    <img className="logo" src={logo} alt="logo"/>
                    <div>Features</div>
                    <div>Company</div>
                    <div>Careers</div>
                    <div>About</div>
                </div>
                <div className='col-7 flex justify-end items-center'>
                    <div className='mr-4'>Login</div>
                    <div className='ml-4'><button className='register-button'>Register</button></div>
                </div>
            </div>
            <div className='row hero mt-2 '>
                <div className="col-6">

                </div>
                <div className="col-6 flex justify-center items-center">
                    <img src={desktopHero} className="desktop-hero" alt="hero"/>
                </div>
            </div>
        </div>
    )
}
