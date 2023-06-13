import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form>
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
                        <p className='text-red-400 p-2'></p>
                        <p className='text-center m-2'>or</p>
                        <div className="form-control ">

                            <button className="btn bg-white outline-slate-900 text-slate-900 hover:bg-violet-600 hover:text-white"> <img src="https://i.ibb.co/FK4xtWJ/google-icon.png" className='h-full p-2' /> Login with Google</button>
                        </div>
                        <p className='font-bold mt-3 p-3'>Don't have an acccount? <Link to={'/register'}><span className='text-violet-400 ms-1 underline'>Register now</span></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;