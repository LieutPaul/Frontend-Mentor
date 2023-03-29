import React from 'react'
import desktop_header from './images/bg-header-desktop.svg'
import mobile_header from './images/bg-header-mobile.svg'
import JobComponent from './JobComponent'
import jobs from './data.json';
import './JobListings.scss'

export default function JobListings() {
    const [filters,changeFilters] = React.useState([]);
    const [renderedJobs, changeRenderedJobs] = React.useState(jobs);
    
    React.useEffect(()=>{
        if(filters.length===0){
            changeRenderedJobs(jobs);
        }else{
            changeRenderedJobs([]);
            jobs.map(job => {
                var v = true;
                for(var i=0;i<filters.length;i++){
                    if(filters[i] != job.role && filters[i] != job.level && job.languages.includes(filters[i])==false){
                        v=false;
                        break;
                    }
                }
                if(v===true)
                    changeRenderedJobs(prev => {return [...prev,job]})
            });
        }
    },[filters])
    
    return (
        <div className='job-listings flex flex-column items-center'>
            <img src={desktop_header} className="desktop-header" alt="desktop-header"/>
            <img src={mobile_header} className="mobile-header" alt="mobile-header"/>
            {renderedJobs.map((job,index) => {
                return <JobComponent job={job} key={index} changeFilters={changeFilters}/>
            })}
        </div>
    )
}