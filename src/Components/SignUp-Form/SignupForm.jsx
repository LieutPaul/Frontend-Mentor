import React from 'react'
import './SignupForm.scss'

export default function SignupForm() {
    return (
        <div className='signup-form'>
            <div className='row'>

                <div className='col-sm-6 col-12 flex flex-col justify-center items-center full-height'>
                    <div className='heading'>Learn to code by watching others</div>
                    <div className='mt-4 subheading'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </div>
                </div>
                <div className='col-sm-6 flex flex-col justify-center items-center full-height'>
                    <div className='freetrial-box text-center'>
                        <b>Try it free 7 days</b> then $20/mo. thereafter
                    </div>
                    <div className='signup-box mt-4 flex flex-col items-center'>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Second Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
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



  // Try it free 7 days then $20/mo. thereafter

  // First Name 
  // Last Name 
  // Email Address
  // Password

  // Claim your free trial 

  // By clicking the button, you are agreeing to our Terms and Services
  

