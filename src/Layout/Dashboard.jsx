import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaUsers, FaWallet } from 'react-icons/fa';
import { GiBookshelf } from "react-icons/gi";
import { LuBookPlus } from "react-icons/lu";
import { ImBooks } from "react-icons/im";
import { BiSelectMultiple } from "react-icons/bi";
import { IoIosAlbums } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {


    // const [isAdmin] = useAdmin();
    const isAdmin = true;
    console.log("is Admin state : ", isAdmin);
    const isUser = false;
    const isInstructor = false;

    return (
        <div className="drawer drawer-mobile md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-violet-300 pt-10">
            <div className="divider">{isAdmin && "Admin"} {isInstructor && "Instructor"} {isUser && "User"} Dashboard</div>
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin && <>
                            <li><NavLink to="/dashboard/allClasses"><GiBookshelf></GiBookshelf> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            
                        </>
                    }
                    {
                        isInstructor && <>
                            <li><NavLink to="/dashboard/addClass"><LuBookPlus></LuBookPlus> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses"><ImBooks></ImBooks> My Classes</NavLink></li>
                            
                        </>
                    }
                    {
                        isUser && <>
                            <li><NavLink to="/dashboard/my-classes"><BiSelectMultiple></BiSelectMultiple> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/my-enrolled-classes"><IoIosAlbums></IoIosAlbums> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                            
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes">All Classes</NavLink></li>
                    <li><NavLink to="/instructors">All Instructor</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;