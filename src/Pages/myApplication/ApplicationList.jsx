import React, { use } from 'react';
import ApplicationsTables from './ApplicationsTables';

const ApplicationList = ({ applicationPromise }) => {

    const applyedJobs = use(applicationPromise)
    // console.log(applyedJobs);
    return (
        <div>
            <h1 className="text-5xl">Total Applied Jobs : {applyedJobs.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                   #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { applyedJobs?.length > 0 &&
                            applyedJobs.map((job, index) => <ApplicationsTables
                                key={job._id}
                                index = {index}
                                application={job}
                            ></ApplicationsTables>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;