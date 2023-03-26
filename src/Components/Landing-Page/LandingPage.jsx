import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ImQuotesLeft} from 'react-icons/im';
import {FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';
import './LandingPage.scss';

import symbol from './images/logo.svg';
import whiteSymbol from './images/white-logo.png';
import filesImage from './images/illustration-1.svg'
import peopleImage from './images/illustration-2.svg'
import curve from './images/bg-curve-desktop.svg'
import arrow from './images/icon-arrow.svg';
import avatarTestimonial from './images/avatar-testimonial.jpg';

export default function LandingPage() {
    return (
        <div className='landing-page'>

            <Navbar className=''>
              <Container>
                <Navbar.Brand className='mt-4'><img src={symbol} alt="symbol"/></Navbar.Brand>
                  <Nav className='mt-3'>
                    <Nav.Link className="text-black ml" href="#">Features</Nav.Link>
                    <Nav.Link className="text-black ml" href="#">Team</Nav.Link>
                    <Nav.Link className="text-black ml" href="#">Sign In</Nav.Link>
                  </Nav>
              </Container>
            </Navbar>

            <div className='row mt-4'>
                <div className='col-7 flex flex-column justify-center items-center'>
                    <div className='heading text-left'>
                        All your files in one secure location, accessible anywhere.
                    </div>
                    <div className='sub-heading mt-4 text-left'>
                      Fylo stores your most important files in one secure location. 
                      Access them wherever you need, share and collaborate with friend, 
                      family, and co-workers.
                    </div>
                    <div className='sub-heading mt-4 flex'>
                        <input placeholder='Enter your Email'/>
                        <button className='ml-4'>Get Started</button>
                    </div>
                </div>
                <div className='col-5'>
                    <img className="img-fluid" src={filesImage} alt="files"/>
                </div>
            </div>
            
            <div className='w-full mt-4' style={{"backgroundRepeat":"no-repeat"}}>
                <img src={curve} alt="curve"></img>
            </div>
            
            <div className='bottom-part'>
              <div className='row'>
                  <div className='col-8 flex flex-col justify-center items-center'>
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
                          <u>See how Flyo Works&nbsp;<img style={{"float":"right","marginTop":"5px"}} alt="arrow" src={arrow}></img></u>
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
                  <div className='col-4'>
                      <img className='img-fluid' src={peopleImage} alt="people"/>
                  </div>
              </div>
            </div>
            
            <div className='early-access-box'>
                <div className='row'>
                    <div className='col-6 flex flex-col justify-center items-center'>
                        <div className='heading'>
                            Get early access today
                        </div>
                        <div className='sub-heading mt-4'>
                            It only takes a minute to sign up and our free starter tier is extremely generous. 
                            If you have any questions, our support team would be happy to help you.
                        </div>
                    </div>
                    <div className='col-6' style={{"paddingTop":"12.5px"}}>
                        <div>
                            <input placeholder='email@example.com'/>
                        </div>
                        <div>
                            <button className='mt-4 pt-2 pb-2'>Get Started For Free</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>

                <div className='row'>
                    
                    <div className='col-3 flex flex-column items-center'>
                        <div className='mt-4 flex justify-left'>
                            <img src={whiteSymbol} alt="whiteSymbol"/>
                        </div>
                        <div className='mt-4 flex'>
                            <span><img src={phone} alt="phone" style={{"float":"left","marginTop":"5px"}}/> &nbsp; &nbsp; Phone: +1-543-123-4567</span>
                        </div>
                        <div className='mt-4 flex'>
                            <span><img src={email} alt="email" style={{"float":"left","marginTop":"5px"}}/> &nbsp; &nbsp; Email: example@fylo.com</span>
                        </div>
                    </div>

                    <div className='col-3 flex flex-column items-center'>
                        <div className='mt-4' style={{"visibility": "hidden"}}>
                            <img src={whiteSymbol} alt="whiteSymbol"/>
                        </div>
                        <div className='mt-4'>
                            About Us
                        </div>
                        <div className='mt-4'>
                            Jobs
                        </div>
                        <div className='mt-4'>
                            Press
                        </div>
                        <div className='mt-4'>
                            Blog
                        </div>
                    </div>

                    <div className='col-3 flex flex-column items-center'>
                        <div className='mt-4' style={{"visibility": "hidden"}}>
                            <img src={whiteSymbol} alt="whiteSymbol"/>
                        </div>
                        <div className='mt-4'>
                            Contact Us
                        </div>
                        <div className='mt-4'>
                            Terms
                        </div>
                        <div className='mt-4'>
                            Privacy
                        </div>
                    </div>
                    
                    <div className='col-3 flex flex-column items-left'>
                        <div className='mt-4' style={{"visibility": "hidden"}}>
                            <img src={whiteSymbol} alt="whiteSymbol"/>
                        </div>
                        <div className='text-white mt-4 flex'>
                            <FaFacebook size={25}/> &nbsp; &nbsp; <FaTwitter size={25}/> &nbsp; &nbsp; <FaInstagram size={25}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
