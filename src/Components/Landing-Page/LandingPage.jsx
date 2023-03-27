import React from 'react';
import {ImQuotesLeft} from 'react-icons/im';
import './LandingPage.scss';

import Footer from './Footer';
import Navbar from './Navbar';

import filesImage from './images/illustration-1.svg'
import peopleImage from './images/illustration-2.svg'
import curve from './images/bg-curve-desktop.svg'
import arrow from './images/icon-arrow.svg';
import avatarTestimonial from './images/avatar-testimonial.jpg';


export default function LandingPage() {
    
    const [email1,setEmail1] = React.useState("");
    const [email2,setEmail2] = React.useState("");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    return (
        <div className='landing-page'>

            <Navbar/>

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
                        
                        <input className='email-input' placeholder='Enter your Email' onChange={(e)=>{
                            setEmail1(e.target.value);
                        }}/>
                        
                        <button className='validate-email-button'>
                            Get Started
                        </button>
                    
                    </div>
                    
                    <div className='text-left text-red-600 w-4/5 mt-3'>
                        {(!validateEmail(email1) && email1.length!==0) && "Email not valid"}
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
                            <input className='email-input-2' placeholder='email@example.com' onChange={(e)=>{
                                setEmail2(e.target.value);
                            }}/>
                        </div>
                        
                        <div className='md-w-80'>
                            <button className='mt-4 pt-2 pb-2 validate-email-button-2'>Get Started For Free</button>
                        </div>
                        
                        <div className='text-left text-red-600 w-4/5 mt-3'>
                            {(!validateEmail(email2) && email2.length!==0) && "Email not valid"}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        
        </div>
    )
}
