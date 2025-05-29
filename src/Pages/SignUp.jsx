import React, { use } from 'react';
import Lottie from 'lottie-react';
import registerLottie from '../assets/lottie/Animation - 1748343096598.json'
import { AuthContext } from '../Conterxt/AuthContext';
import Swal from 'sweetalert2';
import SidnWithGle from '../shared/SidnWithGle';


const SignUp = () => {

    const { createUser, setUser } = use(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        // console.log(email, pass);

        createUser(email, pass)
            .then(result => {
                const person = result.user
                setUser(person)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User crerated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                // console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="">
                    <Lottie style={{ width: '200px' }} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <SidnWithGle></SidnWithGle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;