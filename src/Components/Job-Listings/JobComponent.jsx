import React from 'react';
import './JobComponent.scss';
import {BsDot} from 'react-icons/bs';
import LanguageComponent from './LanguageComponent';

export default function JobComponent({job}) {
    return (
        <div className={`row job-component mt-4 ${job.featured === true && "featured"}`}>
                
                <div className='col-md-6 col-12 ps-4 mt-4 mb-4 h-100 flex items-center'>
                    
                    <img src={require(`${job.logo}`)} alt="logo"/>
                    <div className='details ml-4'>
                        <div className='name-of-company'>
                            {job.company} {job.new === true && <span className='new-box'>NEW!</span>} {job.featured === true && <span className='featured-box'>FEATURED</span>}
                        </div>
                        <div className='role mt-1'>
                            {job.position}
                        </div>
                        <div className='more-details flex mt-1'>
                            {job.postedAt} &nbsp; <BsDot style={{"marginTop":"5px"}}/> &nbsp; {job.contract} &nbsp; <BsDot style={{"marginTop":"5px"}}/> &nbsp; {job.location}
                        </div>
                    </div>
                
                </div>

                <div className='col-md-6 col-12 flex flex-column justify-center text-right'>
                    <div>
                        <LanguageComponent text={job.role}/>
                        <LanguageComponent text={job.level}/>
                        {job.languages.map((language,index) => {
                            return <LanguageComponent text={language} key={index}/>
                        })}
                    </div>
                </div>
                
            
        </div>
    )
}
