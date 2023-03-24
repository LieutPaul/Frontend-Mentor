import React from 'react'
import './TipCalculator.scss'
import logo from './images/logo.svg'
// import dollar from './images/icon-dollar.svg'
import {BiDollar} from 'react-icons/bi'
export default function TipCalculator() {

    const [tipPercentage,changeTipPercentage] = React.useState(5);
    const [bill,changeBill] = React.useState(0);
    const [people,changePeople] = React.useState(0);

    return (
        <div className='tip-calculator flex flex-column justify-center items-center'>
            <img src={logo} alt="symbol"/>
            <div className='tip-box'>
                <div className='row h'>
                    <div className='col-6'>
                        <div className='bill-amount'>
                            
                            Bill
                            
                            <div>
                                <input value={bill!==0 && bill} placeholder="0" type="number" className='input-dollar mt-1 mb-4' onChange={(e)=>{
                                    changeBill(e.target.value);
                                }}></input>
                            </div>

                            Select Tip %

                            <div className='tip-amounts mt-2 mb-4'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <button className={`tip-amount-button ${tipPercentage === 5 && 'selected-button'}`} onClick={()=>{
                                            changeTipPercentage(5);
                                        }}>
                                        5%
                                        </button>
                                    </div>
                                    <div className='col-4'>
                                        <button className={`tip-amount-button ${tipPercentage === 10 && 'selected-button'}`} onClick={()=>{
                                            changeTipPercentage(10);
                                        }}>
                                        10%
                                        </button>
                                    </div>
                                    <div className='col-4'>
                                        <button className={`tip-amount-button ${tipPercentage === 15 && 'selected-button'}`} onClick={()=>{
                                            changeTipPercentage(15);
                                        }}>
                                        15%
                                        </button>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-4'>
                                        <button className={`tip-amount-button ${tipPercentage === 25 && 'selected-button'}`} onClick={()=>{
                                            changeTipPercentage(25);
                                        }}>
                                        25%
                                        </button>
                                    </div>
                                    <div className='col-4'>
                                        <button className={`tip-amount-button ${tipPercentage === 50 && 'selected-button'}`} onClick={()=>{
                                            changeTipPercentage(50);
                                        }}>
                                        50%
                                        </button>
                                    </div>
                                    <div className='col-4'>
                                        <button className={`tip-amount-button ${tipPercentage === 0 && 'selected-button'}`} onClick={()=>{
                                            changeTipPercentage(0);
                                        }}>
                                        Custom
                                        </button>
                                    </div>
                                </div>
                            </div>

                            Number of People

                            <div className='mt-2'>
                                <input value={people!==0 && people} placeholder="0" type="number" className='input-people mt-1 mb-4' onChange={(e)=>{
                                    changePeople(e.target.value);
                                }}></input>
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
                                        <BiDollar/> 
                                        {
                                            (bill === 0 || people === 0)
                                            ?
                                                0.00
                                            : 
                                                ((tipPercentage/100) * (bill/people)).toFixed(2)
                                        }
                                    </div> 
                                </div>

                            </div>

                            <div className='row mt-4' style={{"color":"white"}}>

                                <div className='col-4 text-left mt-auto mb-auto'>
                                    Total <br></br> <small>/ person</small>
                                </div>
                                <div className='col text-right pe-4 final-amount'>
                                    <div className='flex justify-right items-center'>
                                        <BiDollar/> 
                                        {
                                            (bill === 0 || people === 0)
                                            ?
                                                0.00
                                            : 
                                                (((tipPercentage/100)+1) * (bill/people)).toFixed(2)    
                                        }
                                    </div> 
                                </div>

                            </div>

                            <div className='mt-4 button-row flex justify-center'>
                                <button className='reset-button' onClick={()=>{
                                    changeBill(0);
                                    changePeople(0);
                                }}>RESET</button>
                            </div>
                            
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
    )
}
