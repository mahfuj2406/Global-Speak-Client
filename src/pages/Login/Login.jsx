import { useState } from "react";
import { Link, useLocation, useNavigation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const [error, setError] = useState("");
    // useTitle('Login');
    const { logIn, googleLogIn } = useAuth();
    // redirecting work 
    const location = useLocation();
    const navigate = useNavigation();

    const from =  '/';
    console.log("location :" , location);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    // google log in managed here
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((res) => {
                const user = res.user;
                console.log(user); 
                const newUser = { name: user.displayName? user.displayName :"", email: user.email, photoUrl: user.photoURL, role: "user" }
                console.log("new User :", newUser);
                fetch('https://global-speak-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    console.log("from : ", from);
                navigate(from,{ replace: true});
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn bg-violet-300 border-0 hover:border hover:bg-violet-600 hover:text-white">Login</button>
                            </div></form>
                        <p className='text-red-400 p-2'> {error}</p>
                        <p className='text-center m-2'>or</p>
                        <div className="form-control ">

                            <button className="btn bg-white outline-slate-900 text-slate-900 hover:bg-violet-600 hover:text-white" onClick={handleGoogleLogIn}> <img src="https://i.ibb.co/FK4xtWJ/google-icon.png" className='h-full p-2' /> Login with Google</button>
                        </div>
                        <p className='font-bold mt-3 p-3'>Don't have an acccount? <Link to={'/register'}><span className='text-violet-400 ms-1 underline'>Register now</span></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;