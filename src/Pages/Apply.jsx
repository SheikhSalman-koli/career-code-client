import React from 'react';
import { useLoaderData } from 'react-router';

const Apply = () => {

    const job = useLoaderData()
    // console.log(job);
    return (
        <div>
           {job.title}
        </div>
    );
};

export default Apply;