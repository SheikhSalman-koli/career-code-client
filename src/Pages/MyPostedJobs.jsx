import React, { Suspense } from 'react';
import PostedJobList from '../Componant/PostedJobList';
import UseAuth from '../Hook/UseAuth';
import useJobApi from '../applications/useJobApi';

const MyPostedJobs = () => {

    const {user} = UseAuth()
    const {postedJobsPromise} = useJobApi()
    return (
        <div>
            <Suspense>
                <PostedJobList
                    postedJobsPromise={postedJobsPromise(user.email)}
                ></PostedJobList>
            </Suspense> 
        </div>
    );
};

export default MyPostedJobs;