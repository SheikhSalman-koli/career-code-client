import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    // console.log(job);
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
                <div className="flex items-center gap-4 mb-6">
                    <img src={job.company_logo} alt="Company Logo" className="w-16 h-16 object-contain" />
                    <div>
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <p className="text-gray-600">{job.company}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <span className="font-semibold">Location:</span> {job.location}
                </div>

                <div className="mb-4">
                    <span className="font-semibold">Job Type:</span> {job.jobType}
                </div>

                <div className="mb-4">
                    <span className="font-semibold">Category:</span> {job.category}
                </div>

                <div className="mb-4">
                    <span className="font-semibold">Application Deadline:</span> {job.applicationDeadline}
                </div>

                <div className="mb-4">
                    <span className="font-semibold">Salary Range:</span> {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p>{job.description}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                    <ul className="list-disc list-inside">
                        {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
                    <ul className="list-disc list-inside">
                        {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="border-t pt-4 mt-4 text-sm text-gray-600">
                    <p>Contact: {job.hr_name} - <a href={`mailto:${job.hr_email}`} className="text-blue-600">{job.hr_email}</a></p>
                    <p>Status: <span className={job.status === "active" ? "text-green-600" : "text-red-600"}>{job.status}</span></p>
                </div>
                 <div className="justify-start card-actions mt-3">
                        <Link to={`/apply/${job._id}`} className="btn btn-primary">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;