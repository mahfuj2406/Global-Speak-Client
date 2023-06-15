import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        console.log("users", res.data);
        return res.data;
    })
    console.log(classes);

    const classStatusChange = (Class, Status) => {

    }
    return (
        <div className="container mx-auto search-page py-10">
            <div className="overflow-x-auto ">
            <SectionTitle heading={"Manage Classes"}></SectionTitle>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classes.map((Class, index) => <tr
                            key={Class._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={Class.classImageURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{Class.className}</td>
                            <td>{Class.instructorName}</td>
                            <td>{Class.instructorEmail}</td>
                            <td>{Class.availableSeat}</td>
                            <td>{Class.price}</td>
                            <td>{Class.classApprovedStatus}</td>
                            <td>
                                {
                                    Class.classApprovedStatus === "approved" || Class.classApprovedStatus === "denied" ? <>
                                        <button className="btn btn-xs btn-ghost bg-green-600 hover:bg-green-800 text-white me-2" disabled>Approve</button>
                                        <button className="btn btn-xs btn-ghost bg-red-600 hover:bg-red-800 text-white me-2" disabled>Deny</button>
                                        <Link>
                                            <button className="btn btn-xs btn-ghost bg-violet-600 hover:bg-violet-800 text-white">Send Feedback</button></Link>
                                    </> :
                                        <>
                                            <button onClick={() => classStatusChange(Class, "approved")} className="btn btn-xs btn-ghost bg-green-600 hover:bg-green-800 text-white me-2">Approve</button>
                                            <button onClick={() => classStatusChange(Class, "approved")} className="btn btn-xs btn-ghost bg-red-600 hover:bg-red-800 text-white me-2">Deny</button>
                                            <button onClick={() => classStatusChange(Class, "approved")} className="btn btn-xs btn-ghost bg-violet-600 hover:bg-violet-800 text-white">Send Feedback</button>
                                        </>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
        </div>
    );
};

export default ManageClasses;