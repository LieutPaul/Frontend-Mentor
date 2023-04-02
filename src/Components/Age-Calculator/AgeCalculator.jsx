import React, { useState } from 'react'
import logo from './images/icon-arrow.svg'
import './AgeCalculator.scss'

export default function AgeCalculator() {
    
    const [dayError, changeDayError] = useState("");
    const [monthError, changeMonthError] = useState("");
    const [yearError, changeYearError] = useState("");
    const [day,changeDay] = useState("");
    const [month,changeMonth] = useState("");
    const [year,changeYear] = useState("");
    const [age,changeAge] = useState(null)

    function calculateAge() {
        var ifError = false;
        changeDayError("");changeMonthError("");changeYearError("");
        
        if(day===""){
            changeDayError("This field is required."); ifError=true;
        }
        if(month===""){
            changeMonthError("This field is required"); ifError=true;
        }
        if(year===""){
            changeYearError("This field is required."); ifError=true;
        }
        if(day>31){
            changeDayError("Must be a valid day."); ifError=true;
        }
        if(month>12){
            changeMonthError("Must be a valid month."); ifError=true;
        }
        
        if(ifError===true) {
            changeAge(null);
            return ;
        }
        
        changeDayError("");changeMonthError("");changeYearError("");
        
        var birthDate = new Date(`${year}-${month}-${day}`);
        var now = new Date();
        var years = now.getFullYear() - birthDate.getFullYear();
        var months = now.getMonth() - birthDate.getMonth();
        var days = now.getDate() - birthDate.getDate();
        
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months+=12;
        }
        
        if (days < 0) {
            var monthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += monthDays;
            months--;
        }

        if(days<0 || months<0 || years<0){
            changeYearError("Must be in the past.");
            changeDay("");changeMonth("");changeYear("");
            return ;
        }
        changeAge({
            years: years,
            months: months,
            days: days
        });
        changeDay("");changeMonth("");changeYear("");
    }

    return (
        <div className='age-calculator flex flex-column justify-center items-center'>
            <div className="calculator">
                <div className="inputs flex">
                    <div>
                        <label htmlFor='DD' style={{"marginBottom":"10px"}}><small>D A Y</small></label>
                        <input placeholder='DD' type="number" id='DD' value={day} onChange={(e)=>changeDay(e.target.value)}></input>
                        {dayError !== "" && <div className='mt-1 error'>{dayError}</div>}
                    </div>
                    <div>
                        <label htmlFor='MM' style={{"marginBottom":"10px"}}><small>M O N T H</small></label>
                        <input placeholder='MM' type="number" id='MM' value={month} onChange={(e)=>changeMonth(e.target.value)} ></input>
                        {monthError !== "" && <div className='mt-1 error'>{monthError}</div>}
                    </div>
                    <div>
                        <label htmlFor='YYYY' style={{"marginBottom":"10px"}}><small>Y E A R</small></label>
                        <input placeholder='YYYY' type="number" id='YYYY' value={year} onChange={(e)=>changeYear(e.target.value)}></input>
                        {yearError !== "" && <div className='mt-1 error'>{yearError}</div>}
                    </div>
                </div>
                <div className="flex mt-4">
                    <div className='w-10/12 flex items-center'>
                        <div className='symbol-div'>
                        </div>
                    </div>
                    <div className='symbol flex justify-center' onClick={calculateAge}>
                        <img className="arrow" src={logo} alt="arrow"/>
                    </div>
                </div>
                

                <div>
                    <span className='age'>
                    {(age===null || isNaN(age.years) || isNaN(age.months) || isNaN(age.days)) ? "--" : age.years}</span>
                    <span className='age-text'> years</span>
                </div>
                <div>
                    <span className='age'>
                    {(age===null || isNaN(age.years) || isNaN(age.months) || isNaN(age.days)) ? "--" : age.months}</span>
                    <span className='age-text'> months</span>
                </div>
                <div>
                    <span className='age'>
                    {(age===null || isNaN(age.years) || isNaN(age.months) || isNaN(age.days)) ? "--" : age.days}</span>
                    <span className='age-text'> days</span>
                </div>
            </div>
        </div>
    )
}
