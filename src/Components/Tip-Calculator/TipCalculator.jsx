import React from 'react'
import './TipCalculator.scss'
import logo from './images/logo.svg'
// import dollar from './images/icon-dollar.svg'
import {BiDollar} from 'react-icons/bi'
export default function TipCalculator() {
    return (
        <div className='tip-calculator flex flex-column justify-center items-center'>
            <img src={logo} alt="symbol"/>
            <div className='tip-box'>
                <div className='row h'>
                    <div className='col-6'>
                        <div className='bill-amount'>
                            
                            Bill
                            
                            <div>
                                {/* <span><img src={dollar_symbol} alt="dollar symbol"></img></span> */}
                                <input placeholder="0" type="number" className='input-dollar mt-1 mb-4'></input>
                            </div>

                            Select Tip %

                            <div className='tip-amounts mt-2 mb-4'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <button className='tip-amount-button'>5%</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='tip-amount-button'>10%</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='tip-amount-button'>15%</button>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-4'>
                                        <button className='tip-amount-button'>20%</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='tip-amount-button'>50%</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='tip-amount-button'>Custom</button>
                                    </div>
                                </div>
                            </div>

                            Number of People

                            <div className='mt-2'>
                                <input placeholder="0" type="number" className='input-people mt-1 mb-4'></input>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-6 h'>
                        <div className='tip-amount'>

                            <div className='row' style={{"color":"white"}}>
                                <div className='col-4 text-left mt-auto mb-auto'>
                                    Tip Amount <br></br> <small>/ person</small>
                                </div>
                                <div className='col text-right pe-4 final-amount'>
                                    <div className='flex justify-right items-center'>
                                        <BiDollar/> 175.67
                                    </div> 
                                </div>

                            </div>

                            <div className='row mt-4' style={{"color":"white"}}>

                                <div className='col-4 text-left mt-auto mb-auto'>
                                    Total <br></br> <small>/ person</small>
                                </div>
                                <div className='col text-right pe-4 final-amount'>
                                    <div className='flex justify-right items-center'>
                                        <BiDollar/> 175.67
                                    </div> 
                                </div>

                            </div>

                            <div className='mt-4 button-row flex justify-center'>
                                <button className='reset-button'>RESET</button>
                            </div>
                            
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
    )
}
