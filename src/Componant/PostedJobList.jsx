import React, { use } from 'react';
import { Link } from 'react-router';

const PostedJobList = ({ postedJobsPromise }) => {

    const jobs = use(postedJobsPromise)
    // console.log(jobs);

    return (
        <div>
            <h2 className="text-3xl">My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Job Title</th>
                            <th>Job Location</th>
                            <th>Veiw Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                       {
                        jobs.map(job=>  <tr key={job._id}>
                            <th>1</th>
                            <td>{job.title}</td>
                            <td>{job.location}</td>
                            <td><Link to={`/APPLICATION/${job._id}`}>Veiw Application</Link></td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostedJobList;