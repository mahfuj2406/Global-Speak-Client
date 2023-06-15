
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/classes/${user.email}`)
        console.log("users", res.data);
        return res.data;
    })
    return (
        <div className="container mx-auto search-page py-10">
            <div className="overflow-x-auto ">
                <SectionTitle heading={"My Classes"}></SectionTitle>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Total Enrolled Student</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
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
                                <td></td>
                                <td>{Class.availableSeat}</td>
                                <td>{Class.price}</td>
                                <td>{Class.classApprovedStatus}</td>
                                <td>{Class.feedback}</td>
                                <td>
                                    {
                                        <button className="btn btn-xs btn-ghost bg-violet-600 hover:bg-violet-800 text-white">Update</button>
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

export default MyClasses;