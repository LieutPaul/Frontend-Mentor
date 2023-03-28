import React from 'react'
import desktop_header from './images/bg-header-desktop.svg'
import mobile_header from './images/bg-header-mobile.svg'
import JobComponent from './JobComponent'
import jobs from './data.json';
import './JobListings.scss'

export default function JobListings() {

    return (
        <div className='job-listings flex flex-column items-center'>
            <img src={desktop_header} className="desktop-header" alt="desktop-header"/>
            <img src={mobile_header} className="mobile-header" alt="mobile-header"/>
            {jobs.map((job,index) => {
                return <JobComponent job={job} key={index}/>
            })}
        </div>
    )
}