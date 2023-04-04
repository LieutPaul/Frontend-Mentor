import React from 'react'
import './Intropage.scss'
import logo from './images/logo.svg'
import desktopHero from './images/image-hero-desktop.png'
import mobileHero from './images/image-hero-mobile.png';
import audiophile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import downarrow from './images/icon-arrow-down.svg'
import Navbar from './Navbar'

export default function Intropage() {
    return (
        <div className='intropage overflow-x-hidden'>
            
            <div className='navbar row'>
                <div className='col-5 flex justify-between items-center'>
                    <img className="logo" src={logo} alt="logo"/>
                    <div className='navbar-text'>Features &nbsp;<img style={{"float":"right","marginTop":"10px"}} src={downarrow} alt="downarrow"/></div>
                    <div className='navbar-text'>Company &nbsp;<img style={{"float":"right","marginTop":"10px"}} src={downarrow} alt="downarrow"/></div>
                    <div className='navbar-text'>Careers</div>
                    <div className='navbar-text'>About</div>
                </div>
                <div className='col-7 flex justify-end items-center'>
                    <div className='mr-4 navbar-text'>Login</div>
                    <div className='ml-4'><button className='register-button'>Register</button></div>
                </div>
            </div>
            
            <Navbar/>

            <div className='relative row flex-column-reverse flex-xl-row hero mt-xl-2 mt-4 ps-4 pe-4'>
                <div className="col-xl-6 col-12 xl:mt-0 mt-4 flex flex-column justify-center items-center mb-4">
                    <div className="heading xl:w-5/6">Make remote work</div>
                    <div className="hero-text xl:w-5/6 mt-4">Get your team in sync, no matter what your location. Streamline processes, create team rituals, and watch productivity soar.</div>
                    <div className='mt-4 xl:w-5/6'><button className='learnmore-button'>Learn More</button></div>
                    <div className="clients flex xl:w-5/12 w-full mt-4 justify-between">
                        <img src={databiz} className='img-fluid' alt="audiophile"/>
                        <img src={audiophile} className='img-fluid' alt="audiophile"/>
                        <img src={meet} className='img-fluid' alt="audiophile"/>
                        <img src={maker} className='img-fluid' alt="audiophile"/> 
                    </div>
                </div>
                <div className="col-xl-6 col-12 flex justify-center items-center">
                    <img src={desktopHero} className="desktop-hero" alt="hero"/>
                    <img src={mobileHero} className="mobile-hero" alt="hero"/>
                </div>
            </div>
        </div>
    )
}
