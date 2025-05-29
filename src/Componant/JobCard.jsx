import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    const { title, company_logo, applicationDeadline, _id, category, company, description, requirements, responsibilities, salaryRange } = job
    // console.log(job);

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        className='w-full h-[200px]'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <p>{salaryRange.min}-{salaryRange.max}</p>
                    <p>{applicationDeadline}</p>
                    <div className="card-actions">
                        {
                            requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                        }
                    </div>
                    <div className="justify-end card-actions">
                        <Link to={`/details/${_id}`} className="btn btn-primary">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;