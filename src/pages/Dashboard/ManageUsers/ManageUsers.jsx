
import { FaUserShield } from 'react-icons/fa';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        console.log("users",res.data);
        return res.data;
    })


    const roleChange = (user, role) =>{
        console.log(user._id);
        fetch( `http://localhost:5000/users/admin/${user.email}`,{
            method: 'PATCH',
            body: JSON.stringify({ role }),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now ${role}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='container mx-auto search-page py-20'>
            <SectionTitle heading={"All Users"}></SectionTitle>
            <h1>Total users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols border rounded-lg">
                    <thead>
                        <tr className='text-md md:text-xl text-center'>
                            <td>#</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td colSpan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            users.map((user, index) =>
                                <tr className="my-3 text-center text-2xl md:text-3xl"
                                    key={user._id}
                                >
                                    <th className="text-md md:text-lg"> {index + 1} </th>
                                    <td className="text-md md:text-lg">{user.name}</td>
                                    <td className="text-md md:text-lg">{user.email}</td>
                                    <td className="text-md md:text-lg">{user.role}</td>
                                    <td className="text-md md:text-lg text-start"> {
                                        user.role === 'instructor' ? 
                                        <button className="btn btn-ghost bg-violet-600 text-white" disabled>Make Instructor</button>
                                        :
                                         <button onClick={() => roleChange( user , "instructor")} className="btn btn-ghost bg-violet-600 text-white">Make Instructor</button>
                                    } </td>

                                    <td className="text-md md:text-lg text-start"> {
                                        user.role === 'admin' ? 
                                        <button className="btn btn-ghost bg-violet-600 text-white" disabled>Make Admin</button>
                                        :
                                         <button onClick={() => roleChange( user , "admin")} className="btn btn-ghost bg-violet-600 text-white">Make Admin</button>
                                    } </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;