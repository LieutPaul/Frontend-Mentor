import React from 'react';
import './JobComponent.scss';
import {BsDot} from 'react-icons/bs';
import LanguageComponent from './LanguageComponent';

export default function JobComponent({job,changeFilters}) {
    return (
        <div className={`row job-component mt-4 ${job.featured === true && "featured"}`}>
                
                <div className='relative col-md-6 ps-md-4 col-12 mt-4 mb-4 h-100 flex items-center'>
                    <div className='logo'>
                        <img src={require(`${job.logo}`)} alt="logo" className='logo-img'/>
                    </div>
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
                
                <div className='flex justify-center horizontal-line-parent'>
                    <div className='horizontal-line'></div>
                </div>

                <div className='col-md-6 col-12 flex flex-column justify-center language-components'>
                    <div>
                        <LanguageComponent text={job.role} changeFilters={changeFilters}/>
                        <LanguageComponent text={job.level} changeFilters={changeFilters}/>
                        {job.languages.map((language,index) => {
                            return <LanguageComponent text={language} key={index} changeFilters={changeFilters}/>
                        })}
                    </div>
                </div>
                
            
        </div>
    )
}
