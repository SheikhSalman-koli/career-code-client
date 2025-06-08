import React from 'react';
import UseAuth from '../Hook/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {

    const {user} = UseAuth()

    const handleSubmit =e=>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        // salary range
        const {max, min, currency, ...newJob} = data
        newJob.salaryRange = {max, min, currency}
        // requirements
        // newJob.Requirements = newJob.Requirements.split(',').map(i=> i.trim())
        const requirementsStr = newJob.Requirements
        const requirementsdirty = requirementsStr.split(',')
        const requirementsClean = requirementsdirty.map(req=> req.trim())
        newJob.Requirements = requirementsClean

        const ResponsibilitiesStr = newJob.Responsibilities
        const Responsibilitiesdirty = ResponsibilitiesStr.split(',')
        const ResponsibilitiesClean = Responsibilitiesdirty.map(req=> req.trim())
        newJob.Responsibilities = ResponsibilitiesClean

        newJob.status = "active"
        // console.log(newJob);

        axios.post('http://localhost:3000/jobs', newJob)
        .then(res=>{
            // console.log(res.data);
            if(res.data.insertedId){
                Swal.fire('a job added successfully')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className='max-w-2xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='md:flex gap-10'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <div>
                            <label className="label">Job Title</label>
                            <input type="text" name='title' className="input" placeholder="Job Title" />
                        </div>
                        <div>
                            <label className="label">Company</label>
                            <input type="text" name='company' className="input" placeholder="Company Name" />
                        </div>
                        <div>
                            <label className="label">Location</label>
                            <input type="text" name='location' className="input" placeholder="Location" />
                        </div>
                        <div>
                            <label className="label">Company_logo</label>
                            <input type="text" name='logo' className="input" placeholder="Company_logo" />
                        </div>
                        <div>
                            <label className="label">Job Type</label>
                            <div className="filter">
                                <input className="btn filter-reset" type="radio" name="Job-Type" aria-label="all" />
                                <input className="btn" type="radio" name="Job-Type" aria-label="Remote" />
                                <input className="btn" type="radio" name="Job-Type" aria-label="Hybrid" />
                                <input className="btn" type="radio" name="Job-Type" aria-label="OnSite" />
                            </div>
                        </div>
                        <div>
                            <label className="label">Category</label>
                            <select defaultValue="Category" name='category' className="select">
                                <option disabled={true}>Pick a color</option>
                                <option>Development</option>
                                <option>Vedio Editing</option>
                                <option>Finance</option>
                            </select>
                        </div>
                          <div>
                            <label className="label">Description</label>
                           <textarea className="textarea" placeholder="Job Description"></textarea>
                        </div>
                        
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <div>
                            <label className="label">Salary Range</label>
                            <div className='grid grid-cols-1 md:grid-cols-3'>
                                <div>
                                    <label className="label">Maximum</label>
                                    <input type="text" name='max' className="input" placeholder="max" />
                                </div>
                                <div>
                                    <label className="label">Minimum</label>
                                    <input type="text" name='min' className="input" placeholder="min" />
                                </div>
                                <div>
                                    <label className="label">Currency</label>
                                    <select defaultValue="currency" name='currency' className="select">
                                        <option disabled={true}>Pick a color</option>
                                        <option>Dolar</option>
                                        <option>Taka</option>
                                        <option>Dinar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                       <div>
                            <label className="label">Deadline</label>
                            <input type="date" name='Deadline' className="input" placeholder="Deadline" />
                        </div>
                        <div>
                            <label className="label">Requirements</label>
                             <textarea className="textarea" name='requirements' placeholder="Requirements (separate by comma)"></textarea>
                        </div>
                        <div>
                            <label className="label">Responsibilities</label>
                             <textarea className="textarea" name='responsibilities' placeholder="Responsibilities (separate by comma)"></textarea>
                        </div>
                        <div>
                            <label className="label">HR Name</label>
                            <input type="text" name='hr_name' className="input" placeholder="HR Name" />
                        </div>
                        <div>
                            <label className="label">HR Email</label>
                            <input type="email" name='hr_email' className="input" defaultValue={user.email} readOnly />
                        </div>
                    </fieldset>
                </div>
                <button type='submit' className="btn btn-neutral w-full mt-4">Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;