import React, { useState } from 'react'
import logo from './images/icon-arrow.svg'

import './AgeCalculator.scss'

export default function AgeCalculator() {
    
    function calculateAge(birthDate) {
        var now = new Date();
        var years = now.getFullYear() - birthDate.getFullYear();
        var months = now.getMonth() - birthDate.getMonth();
        var days = now.getDate() - birthDate.getDate();
        
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
        
        if (days < 0) {
            var monthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += monthDays;
            months--;
        }
        
        return {
            years: years,
            months: months,
            days: days
        };
    }

      
    const [day,changeDay] = useState(null);
    const [month,changeMonth] = useState(null);
    const [year,changeYear] = useState(null);
    const [age,changeAge] = useState(null)

    return (
        <div className='age-calculator flex flex-column justify-center items-center'>
            <div className="calculator">
                <div className="inputs flex">
                    <div>
                        <label htmlFor='DD' style={{"marginBottom":"10px"}}><small>D A Y</small></label>
                        <input placeholder='DD' type="number" id='DD' onChange={(e)=>changeDay(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='MM' style={{"marginBottom":"10px"}}><small>M O N T H</small></label>
                        <input placeholder='MM' type="number" id='MM' onChange={(e)=>changeMonth(e.target.value)} ></input>
                    </div>
                    <div>
                        <label htmlFor='YYYY' style={{"marginBottom":"10px"}}><small>Y E A R</small></label>
                        <input placeholder='YYYY' type="number" id='YYYY' onChange={(e)=>changeYear(e.target.value)}></input>
                    </div>
                </div>
                <div className="flex mt-4">
                    <div className='w-10/12 flex items-center'>
                        <div className='symbol-div'>
                        </div>
                    </div>
                    <div className='symbol flex justify-center' onClick={()=>{
                        var birthDate = new Date(`${year}-${month}-${day}`);
                        // var age = calculateAge(birthDate);
                        changeAge(calculateAge(birthDate));
                        // console.log(age.years + ' years, ' + age.months + ' months, ' + age.days + ' days');
                    }}>
                        <img style={{"margin":"20px 20px 20px 20px"}} src={logo} alt="arrow"/>
                    </div>
                </div>
                

                <div>
                    <span className='age'>{(age===null || isNaN(age)) ? "--" : age.years}</span><span className='age-text'> years</span>
                </div>
                <div>
                    <span className='age'>{(age===null || isNaN(age)) ? "--" : age.months}</span><span className='age-text'> months</span>
                </div>
                <div>
                    <span className='age'>{(age===null || isNaN(age)) ? "--" : age.days}</span><span className='age-text'> days</span>
                </div>
            </div>
        </div>
    )
}
