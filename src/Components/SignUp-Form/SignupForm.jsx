import React from 'react'
import './SignupForm.scss'

export default function SignupForm() {

    const [onceSubmitted,setOnceSubmitted] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const runChecks = () => {
        setOnceSubmitted(true);
    }
    return (
        <div className='signup-form'>
            <div className='row'>

                <div className='col-lg-6 col-12 flex flex-col justify-center items-center full-height-1'>
                    <div className='heading'>Learn to code by watching others</div>
                    <div className='mt-4 subheading'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </div>
                </div>
                <div className='col-lg-6 col-12 flex flex-col justify-center items-center full-height-2'>
                    
                    <div className='freetrial-box text-center ps-2 pe-2'>
                        <b>Try it free 7 days</b> then $20/mo. thereafter
                    </div>

                    <div className='signup-box mt-4 flex flex-col items-center'>

                        <input type="text" onChange={(e)=>{
                            setFirstName(e.target.value);
                        }} placeholder="First Name"/>

                        <div className='errorMessages'>
                            {(onceSubmitted && firstName.length===0) && "First name cannot be empty"}
                        </div>
                        
                        <input type="text" onChange={(e)=>{
                            setLastName(e.target.value);
                        }} placeholder="Second Name"/>

                        <div className='errorMessages'>
                            {(onceSubmitted && lastName.length===0) && "Last name cannot be empty"}
                        </div>

                        <input type="email" onChange={(e)=>{
                            setEmail(e.target.value);
                        }} placeholder="Email"/>

                        <div className='errorMessages'>
                            {(onceSubmitted && email.length===0) && "Email not valid"}
                        </div>

                        <input type="password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }} placeholder="Password"/>

                        <div className='errorMessages'>
                            {(onceSubmitted && password.length===0) && "Password cannot be empty"}
                        </div>

                        <button onClick={()=>{
                            runChecks();
                        }}>CLAIM YOUR FREE TRIAL</button>
                        <div className='mt-2 mb-4' style={{"width":"80%"}}>
                        <small>By clicking the button, you are agreeing to our 
                        <span style={{"color":"rgb(238, 129, 124)"}}>
                            <b> Terms and Services</b>
                        </span>
                        </small>
                        </div>
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

  

