import React from 'react';
import './LandingPage.scss'
import symbol from './images/logo.svg'
import filesImage from './images/illustration-1.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
        </div>
    )
}


//   Stay productive, wherever you are

//   Never let location be an issue when accessing your files. Fylo has you 
//   covered for all of your file storage needs.

//   Securely share files and folders with friends, family and colleagues for 
//   live collaboration. No email attachments required!

//   See how Fylo works

//   Fylo has improved our team productivity by an order of magnitude. Since 
//   making the switch our team has become a well-oiled collaboration machine.

//   Kyle Burton
//   Founder & CEO, Huddle

//   Get early access today

//   It only takes a minute to sign up and our free starter tier is extremely generous. 
//   If you have any questions, our support team would be happy to help you.

//   Get Started For Free

//   Phone: +1-543-123-4567
//   example@fylo.com

//   About Us
//   Jobs
//   Press
//   Blog

//   Contact Us
//   Terms
//   Privacy