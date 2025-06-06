import React from 'react';

const ApplicationsTables = ({ application, index }) => {

    const { company, title, company_logo, linkedin } = application
    // console.log(application);

    return (

        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">{company}</p>
                    </div>
                </div>
            </td>
            <td>
               {title}
            </td>
            <td>{
                linkedin}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default ApplicationsTables;