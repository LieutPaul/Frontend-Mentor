import React from 'react'
import './TitlePage.scss'
import OrderSummaryImg from './Components/OrderSummary/screenshot.jpg'
import SignUpImg from './Components/SignUp-Form/screenshot.jpg'
import TipCalculatorImg from './Components/Tip-Calculator/screenshot.jpg'

export default function TitlePage() {
    return (
        <div className='TitlePage'>
            <div className='text-center pt-4 pb-4'>
                <span className='heading'>Frontend Mentor Solutions</span>
            </div>
            <div>
                <div className='row mt-4'>
                    
                    <div className='col-md-4 col-12 screenshot'>
                        <img className='img-fluid' src={OrderSummaryImg} alt={"Order summary"} />
                        <div className='page-name'>
                            Order Summary
                        </div>
                    </div>

                    <div className='col-md-4 col-12 screenshot'>
                        <img className='img-fluid' src={SignUpImg} alt={"Sign up page"} />
                        <div className='page-name'>
                            Sign Up Page
                        </div>
                    </div>

                    <div className='col-md-4 col-12 screenshot'>
                        <img className='img-fluid' src={TipCalculatorImg} alt={"Tip Calculator"} />
                        <div className='page-name'>
                            Tip Calculator
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
