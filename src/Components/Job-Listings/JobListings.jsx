import React from 'react'
import header from './images/bg-header-desktop.svg'
import JobComponent from './JobComponent'
import jobs from './data.json';
import './JobListings.scss'

export default function JobListings() {

    return (
        <div className='job-listings flex flex-column items-center'>
            <img src={header} className="header" alt="header"/>
            {jobs.map((job,index) => {
                return <JobComponent job={job} key={index}/>
            })}
        </div>
    )
}