import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';


const NavBar = () => {
    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/classes'}>Classes</Link></li>
        <li><Link to={'/instructors'}>Instructors</Link></li>
    </>
    return (
        <div className="w-full bg-violet-300">
            <div className="container mx-auto ">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-300 z-10 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <h1 className="normal-case font-bold border rounded p-2 text-lg md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-slate-600 to-blue-600 hover:cursor-pointer"> <Link to={'/'}>Global Speak</Link> </h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li><a >Dashboard</a></li>
                        <li><a >Log out</a></li>
                        <li><Link to={'/login'}>Login</Link></li>

                    </ul>
                    <label className="btn btn-circle avatar bg-blue-700 hover:bg-slate-700 text-2xl" >
                    <FaUser className='text-white'></FaUser>
                        {/* {
                            user ? <img className='rounded-full' src={user.photoURL} /> : <FontAwesomeIcon className='rounded-full' icon="fa-solid fa-user" />
                        } */}
                    </label>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;