import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';

const useJobApi = () => {
    const axiosSecure = useAxiosSecure()
    const postedJobsPromise =email=>{
        return axiosSecure.get(`jobs/applications?email=${email}`)
        .then(res => res.data)
    }
    return {
        postedJobsPromise
    }
};

export default useJobApi;