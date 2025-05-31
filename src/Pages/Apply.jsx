import React from 'react';
import { useLoaderData } from 'react-router';
import UseAuth from '../Hook/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const Apply = () => {

    const job = useLoaderData()
    const jobId = job._id
    const { user } = UseAuth()
    console.log(jobId);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
        console.log(linkedin, github, resume);

        const allInfo = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications',
            allInfo
        )
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div>
            <h1 className="text-4xl">Apply Job For: {job.title}</h1>
            <form onSubmit={handleSubmit} className='mt-5'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn url</label>
                    <input name='linkedin' type="url" className="input" placeholder="LinkedIn url" />

                    <label className="label">Github url</label>
                    <input name='github' type="url" className="input" placeholder="Github url" />

                    <label className="label">Resume url</label>
                    <input name='resume' type="url" className="input" placeholder="Resume url" />

                    <button type='submit' className="btn btn-neutral mt-4">Apply</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Apply;