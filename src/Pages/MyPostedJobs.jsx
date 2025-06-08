import React, { Suspense } from 'react';
import PostedJobList from '../Componant/PostedJobList';
import { postedJobsPromise } from '../applications/PostedJobs';
import UseAuth from '../Hook/UseAuth';

const MyPostedJobs = () => {

    const {user} = UseAuth()
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