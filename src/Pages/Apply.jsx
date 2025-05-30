import React from 'react';
import { useLoaderData } from 'react-router';
import UseAuth from '../Hook/UseAuth';

const Apply = () => {

    const job = useLoaderData()
    const {user} = UseAuth()
    console.log(user);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value

        console.log(linkedin, github, resume);
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

                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Apply;