
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    // useTitle('Register');
    const { createUser, updateUserProfile } = useAuth();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password,photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);
                updateUserProfile(name,photoURL)
                    .then(() => {
                        const newUser = { name: name, email: email, photoUrl : user.photoUrl, role: "user"}
                        fetch('https://global-speak-server.vercel.app/users', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/login');
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                    })
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-violet-500">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='cPassword' placeholder="confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Your profile photo url" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn bg-violet-300 border-0 hover:border hover:bg-violet-600 hover:text-white">Register</button>
                            </div>
                            <p className='text-red-400'> </p>
                            <p className='font-bold mt-3 p-3'>Already member? <Link to={'/login'}><span className='text-violet-400 ms-1 underline'>Login now</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;