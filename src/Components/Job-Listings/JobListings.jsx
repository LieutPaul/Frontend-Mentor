import React from 'react'
import desktop_header from './images/bg-header-desktop.svg'
import mobile_header from './images/bg-header-mobile.svg'
import JobComponent from './JobComponent'
import jobs from './data.json';
import './JobListings.scss'
import LanguageComponent from './LanguageComponent';

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
                    if(filters[i] !== job.role && filters[i] !== job.level && job.languages.includes(filters[i])===false){
                        v=false;
                        break;
                    }
                }
                if(v===true)
                    changeRenderedJobs(prev => {return [...prev,job]})
                return null;
            });
        }
    },[filters])
    
    return (

        <div className='job-listings flex flex-column items-center'>
            
            <div className='relative flex justify-center items-end desktop-header'>
                <img src={desktop_header} alt="desktop-header"/>
                {filters.length>0 &&
                    <div className='filters flex'>
                        {filters.map((filter,key) => {
                            return <LanguageComponent key={key} text={filter} changeFilters={changeFilters} filters={filters} role="filter"/>
                        })}
                    </div>
                }
            </div>

            <div className="relative flex justify-center items-end mobile-header">
                <img src={mobile_header} alt="mobile-header"/>
                {filters.length>0 && 
                    <div className='filters flex'>
                        {filters.map((filter,key) => {
                            return <LanguageComponent key={key} changeFilters={changeFilters} filters={filters} text={filter} role="filter"/>
                        })}
                    </div>
                }
            </div>
            
            {renderedJobs.map((job,index) => {
                return <JobComponent job={job} key={index} changeFilters={changeFilters} filters={filters}/>
            })}
        </div>
    )
}