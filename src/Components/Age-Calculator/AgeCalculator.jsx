import React from 'react'
import './AgeCalculator.scss'

export default function AgeCalculator() {
    return (
        <div className='age-calculator flex flex-column justify-center items-center'>
            <div className="calculator">
                <div className="inputs flex">
                    <div>
                        <label htmlFor='DD' style={{"marginBottom":"10px"}}><small>D A Y</small></label>
                        <input placeholder='DD' id='DD'></input>
                    </div>
                    <div>
                        <label htmlFor='MM' style={{"marginBottom":"10px"}}><small>M O N T H</small></label>
                        <input placeholder='MM' id='MM'></input>
                    </div>
                    <div>
                        <label htmlFor='YYYY' style={{"marginBottom":"10px"}}><small>Y E A R</small></label>
                        <input placeholder='YYYY' id='YYYY'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
