
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useInstructor from '../../hooks/useInstructor';

const AllClassesCard = ({ Class }) => {
    const { user } = useAuth();
    const [disable, setDisable] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [axiosSecure] = useAxiosSecure();
    
    const handleBookClass = (classData) => {
        setDisable(true);
        if (user) {
            const {
                _id,
                classImageURL,
                className,
                availableSeat,
                price,
                instructorName,
                instructorEmail,
                enrollStudents,
            } = classData;

            const bookedClass = {
                classImageURL,
                className,
                availableSeat,
                price,
                instructorName,
                instructorEmail,
                enrollStudents,
                user_email: user?.email,
                class_id: _id,
            };
            const productId = _id;
            const userEmail = user?.email;
            console.log(bookedClass);

            axiosSecure.post("/bookedclass", { bookedClass }).then((res) => {
                if (res.data.insertedId) {
                    localStorage.setItem(`cartButtonDisabled_${ productId }_${ userEmail }`, "true");
                    Swal.fire({
                        title: "Success!",
                        text: "You have booked the class successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                }
            });
        } else {
            const state = { from: location };
            navigate("/login", { state, replace: true });
        }
    };

    const { className, classImageURL, instructorName, availableSeat, price } = Class;
    return (
        <div className="card card-compact bg-base-100 shadow-xl relative">
            <figure><img src={classImageURL}  /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>{instructorName}</p>
                <div className="card-actions justify-end">
                    <h1 className='bg-slate-400 text-white absolute p-2 rounded-md top-5 right-5'>Price : <span>{price}</span></h1>
                    <p>Available Seat: {availableSeat}</p>
                    <button
                    onClick={() => handleBookClass(Class)}
                    disabled={
                        disable ||
                      availableSeat == 0 ||
                      isAdmin ||
                      isInstructor ||
                      localStorage.getItem(`cartButtonDisabled_${Class._id}_${user?.email}`) ===
                        "true"
                    }
                    className="btn btn-neutral w-full text-white "
                  >Enrol Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;