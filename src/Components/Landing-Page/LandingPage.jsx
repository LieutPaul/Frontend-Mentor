import React from 'react';
import {ImQuotesLeft} from 'react-icons/im';
import {FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'
import phone from './images/icon-phone.svg';
import emailImg from './images/icon-email.svg';
import './LandingPage.scss';

import symbol from './images/logo.svg';
import whiteSymbol from './images/white-logo.png';
import filesImage from './images/illustration-1.svg'
import peopleImage from './images/illustration-2.svg'
import curve from './images/bg-curve-desktop.svg'
import arrow from './images/icon-arrow.svg';
import avatarTestimonial from './images/avatar-testimonial.jpg';

export default function LandingPage() {
    const [email,setEmail] = React.useState("");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    return (
        <div className='landing-page'>

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

            <div className='row mt-4 flex-column-reverse flex-md-row'>
                <div className='col-md-7 col-12 flex flex-column justify-center items-center'>
                    <div className='heading'>
                        All your files in one secure location, accessible anywhere.
                    </div>
                    <div className='sub-heading mt-4 text-left'>
                      Fylo stores your most important files in one secure location. 
                      Access them wherever you need, share and collaborate with friend, 
                      family, and co-workers.
                    </div>
                    <div className='input-group mt-4 flex'>
                        <input className='email-input' placeholder='Enter your Email'/>
                        <button className='validate-email-button' onChange={(e)=>setEmail(e.target.value)} onClick={()=>{
                            if(validateEmail(email)===false){

                            }
                        }}>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className='col-md-5 col-12'>
                    <img className="img-fluid" src={filesImage} alt="files"/>
                </div>
            </div>
            
            <div className='w-full mt-4' style={{"backgroundRepeat":"no-repeat"}}>
                <img src={curve} alt="curve"></img>
            </div>
            
            <div className='bottom-part'>
              <div className='row flex-column-reverse flex-md-row'>
                  <div className='col-md-8 col-12 flex flex-col justify-center items-center'>
                    <div className='heading'>
                        Stay productive, wherever you are
                    </div>
                    <div className='sub-heading mt-4'>
                        Never let location be an issue when accessing your files. Fylo has you 
                        covered for all of your file storage needs.
                        <br></br><br></br>
                        Securely share files and folders with friends, family and colleagues for 
                        live collaboration. No email attachments required!
                        <br></br><br></br>
                        <span style={{"color":"rgb(75,181,67)","display":"flex"}}>
                          <a className='light-green-hover' href="#works"><u>See how Flyo Works&nbsp;<img style={{"float":"right","marginTop":"5px"}} alt="arrow" src={arrow}></img></u></a>
                        </span>
                        <div className='testimonial mt-4'>
                            <ImQuotesLeft/>
                            <br></br>
                            Fylo has improved our team productivity by an order of magnitude. Since 
                            making the switch our team has become a well-oiled collaboration machine.
                            <div className='row testimonial-name mt-3 flex items-center'>
                                <div className='col-3'>
                                    <img src={avatarTestimonial} className="img-fluid" style={{"float":"left", "borderRadius":"50%"}} alt="avatar"/>
                                </div>
                                Kyle Burton<br></br>
                                Founder & CEO, Huddle
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                      <img className='img-fluid' src={peopleImage} alt="people"/>
                  </div>
              </div>
            </div>
            
            <div className='early-access-box'>
                <div className='row'>
                    <div className='col-md-6 col-12 flex flex-col justify-center items-center'>
                        <div className='heading'>
                            Get early access today
                        </div>
                        <div className='sub-heading mt-4'>
                            It only takes a minute to sign up and our free starter tier is extremely generous. 
                            If you have any questions, our support team would be happy to help you.
                        </div>
                    </div>
                    <div className='col-md-6 col-12 started-for-free' style={{"paddingTop":"12.5px"}}>
                        <div className='md-w-80'>
                            <input className='email-input-2' placeholder='email@example.com'/>
                        </div>
                        <div className='md-w-80'>
                            <button className='mt-4 pt-2 pb-2 validate-email-button-2'>Get Started For Free</button>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    )
}
