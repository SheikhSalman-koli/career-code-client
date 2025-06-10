import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hook/UseAuth';
import useApplicationApi from '../../applications/useApplicationApi';


const MyApplications = () => {

    const { user } = UseAuth()
    const {applicationPromise} = useApplicationApi()
    // console.log(user.accessToken);
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            
            <Suspense fallback={
                <>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </>
            }>
                <ApplicationList
                    applicationPromise={applicationPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;