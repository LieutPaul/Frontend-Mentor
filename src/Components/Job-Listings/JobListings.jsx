import React from 'react'
import header from './images/bg-header-desktop.svg'
import JobComponent from './JobComponent'
import './JobListings.scss'

export default function JobListings() {

    return (
        <div className='job-listings flex flex-column items-center'>
            <img src={header} className="header" alt="header"/>
            <JobComponent/>
        </div>
    )
}