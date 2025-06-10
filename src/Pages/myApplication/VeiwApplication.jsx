import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const VeiwApplication = () => {
    const { id } = useParams()
    const applications = useLoaderData()
    // console.log(applications);

    const handleChange = (e, app_id) => {
        console.log(e.target.value, app_id);

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status has been updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h4 className="text-4xl">{applications.length} application For : {id}</h4>
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
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map((application, index) => <tr key={application._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="font-bold">{application.applicant}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{application.github}</td>
                            <td>
                                <select onChange={e => handleChange(e, application._id)} defaultValue={application.status} className="select">
                                    <option disabled={true}>Update Status</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                    <option>Interveiw</option>
                                </select>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default VeiwApplication;