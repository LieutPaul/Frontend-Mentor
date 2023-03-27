import React from 'react';

import {FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'
import phone from './images/icon-phone.svg';
import emailImg from './images/icon-email.svg';
import whiteSymbol from './images/white-logo.png';

import './LandingPage.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='row'>
                
                <div className='col-md-3 col-12 flex flex-column items-center'>
                    <div className='mt-4 flex justify-left'>
                        <img src={whiteSymbol} alt="whiteSymbol"/>
                    </div>
                    <div className='mt-4 flex'>
                        <span><img src={phone} alt="phone" style={{"float":"left","marginTop":"5px"}}/> &nbsp; &nbsp; Phone: +1-543-123-4567</span>
                    </div>
                    <div className='mt-4 flex'>
                        <span><img src={emailImg} alt="email" style={{"float":"left","marginTop":"5px"}}/> &nbsp; &nbsp; Email: examp@fylo.com</span>
                    </div>
                </div>
                
                <div className='col-md-1 filler-col'></div>
                
                <div className='col-md-2 col-12 flex flex-column footer-text'>
                    <div className='mt-4 invisible-image'>
                        <img src={whiteSymbol} alt="whiteSymbol"/>
                    </div>
                    <div className='mt-4 text-left'>
                        <a href="#footer" className='footerHover'>About Us</a>
                    </div>
                    <div className='mt-4 text-left'>
                        <a href="#footer" className='footerHover'>Jobs</a>
                    </div>
                    <div className='mt-4 text-left'>
                        <a href="#footer" className='footerHover'>Press</a>
                    </div>
                    <div className='mt-4 text-left'>
                        <a href="#footer" className='footerHover'>Blog</a>
                    </div>
                </div>
                
                <div className='col-md-1 filler-col'></div>

                <div className='col-md-2 col-12 flex flex-column footer-text'>
                    <div className='mt-4 invisible-image'>
                        <img src={whiteSymbol} alt="whiteSymbol"/>
                    </div>
                    <div className='mt-4'>
                        <a href="#footer" className='footerHover'>Contact Us</a>
                    </div>
                    <div className='mt-4'>
                        <a href="#footer" className='footerHover'>Terms</a>
                    </div>
                    <div className='mt-4'>
                        <a href="#footer" className='footerHover'>Privacy</a>
                    </div>
                </div>
                
                <div className='col-md-3 col-12 flex flex-column items-right footer-text'>
                    <div className='mt-4 invisible-image'>
                        <img src={whiteSymbol} alt="whiteSymbol"/>
                    </div>
                    <div className='text-white mt-4 flex'>
                        <FaFacebook className='facebookSymbol' size={25}/> &nbsp; &nbsp; <FaTwitter className='twitterSymbol' size={25}/> &nbsp; &nbsp; <FaInstagram className='instaSymbol' size={25}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
