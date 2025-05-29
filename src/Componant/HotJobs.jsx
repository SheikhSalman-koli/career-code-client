import React, { use, useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
           {
            jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
           }
        </div>
    );
};

export default HotJobs;