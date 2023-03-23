import React from 'react'
import './SignupForm.scss'

export default function SignupForm() {
    return (
        <div className='signup-form'>
            <div className='row'>

                <div className='col-sm-6 flex flex-col justify-center items-center full-height-1'>
                    <div className='heading'>Learn to code by watching others</div>
                    <div className='mt-4 subheading'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </div>
                </div>
                <div className='col-sm-6 flex flex-col justify-center items-center full-height-2'>
                    <div className='freetrial-box text-center'>
                        <b>Try it free 7 days</b> then $20/mo. thereafter
                    </div>
                    <div className='signup-box mt-4 flex flex-col items-center'>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Second Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button>CLAIM YOUR FREE TRIAL</button>
                        
                        <small className='mt-2'>By clicking the button, you are agreeing to our 
                        <span style={{"color":"rgb(238, 129, 124)"}}>
                            <b> Terms and Services</b>
                        </span>
                        </small>
                    </div>
                </div>

            </div>
            {/* <footer>
                <p class="attribution">
                  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
                  Coded by <a href="https://github.com/LieutPaul">Vikas K</a>.
                </p>
            </footer> */}
        </div>
    )
}

  

