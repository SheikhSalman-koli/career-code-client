import Lottie from 'lottie-react';
import React, { use } from 'react';
import logLottie from '../assets/lottie/login-lottie.json'
import { AuthContext } from '../Conterxt/AuthContext';
import Swal from 'sweetalert2';
import SidnWithGle from '../shared/SidnWithGle';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const { loginUser, setUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        // console.log(email, pass);

        loginUser(email, pass)
            .then(result => {
                const person = result.user
                setUser(person)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
                // console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="">
                    <Lottie style={{ width: '200px' }} animationData={logLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <SidnWithGle></SidnWithGle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;