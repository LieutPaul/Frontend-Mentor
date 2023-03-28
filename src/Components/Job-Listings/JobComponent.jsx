import React from 'react';
import './JobComponent.scss';
import array from './data.json';
import {BsDot} from 'react-icons/bs';
import LanguageComponent from './LanguageComponent';

export default function JobComponent() { // Destructure the props as {job}
    const job = array[0];
    console.log(job.logo)
    return (
        <div className='row job-component mt-4'>
            
                
                <div className='col-md-6 col-12 ps-4 mt-4 mb-4 h-100 flex items-center'>
                    
                    <img src={require(`${job.logo}`)} alt="logo"/>
                    <div className='details ml-4'>
                        <div className='name-of-company'>
                            {job.company}
                        </div>
                        <div className='role mt-1'>
                            {job.position}
                        </div>
                        <div className='more-details flex mt-1'>
                            {job.postedAt} &nbsp; <BsDot style={{"marginTop":"5px"}}/> &nbsp; {job.contract} &nbsp; <BsDot style={{"marginTop":"5px"}}/> &nbsp; {job.location}
                        </div>
                    </div>
                
                </div>

                <div className='col-md-6 overflow-scroll col-12 flex flex-column justify-center text-right'>
                    <div>
                        <LanguageComponent text={job.role}/>
                        <LanguageComponent text={job.level}/>
                        {job.languages.map(language => {
                            return <LanguageComponent text={language}/>
                        })}
                    </div>
                </div>
                
            
        </div>
    )
}
