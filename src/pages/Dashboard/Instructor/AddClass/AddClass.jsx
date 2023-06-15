import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const image_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        console.log(data);
        fetch(image_hoisting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imageData) => {
                if (imageData.success) {
                    const classData = {
                        className: data.className,
                        classImageURL: imageData.data.display_url,
                        instructorName: user?.displayName,
                        instructorEmail: user?.email,
                        availableSeat: parseInt(data.available_seats),
                        price: parseFloat(data.price),
                        classApprovedStatus: "Pending",
                        feedback: ""
                    };
                    axiosSecure.post("/classes", classData).then((data) => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                title: "Your class has been added!",
                                text: "Waiting for admin Approval !!",
                                icon: "success",
                                confirmButtonText: "ok",
                            });
                        }
                    });
                }
            });
    };
    return (
        <div className="w-11/12 md:w-6/12  mx-auto mt-10">
            {/* <Helmet>
                <title>Add Class | MartialArt</title>
            </Helmet> */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" border bg-violet-200  p-10 rounded space-y-3 shadow"
            >
                <h3 className="text-center text-2xl font-semibold"> Add a Class</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input
                        type="text"
                        name="className"
                        className="input input-bordered"
                        placeholder="Enter class name"
                        {...register("className", { required: true })}
                    />
                    {errors.className?.type === "required" && (
                        <p className="text-red-600" role="alert">
                            Class Name is required
                        </p>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={user?.displayName}
                        placeholder="Enter instructor name"
                        className="input input-bordered"
                        {...register("instructor_name")}
                    />
                </div>
                <div className="mb-3 form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email* </span>
                    </label>
                    <input
                        type="email"
                        className="input input-bordered"
                        defaultValue={user?.email}
                        placeholder="Enter instructor email"
                        {...register("instructor_email")}
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Available seats*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter available seats"
                        className="input input-bordered "
                        {...register("available_seats", { required: true })}
                    />
                    {errors.available_seats?.type === "required" && (
                        <p className="text-red-600" role="alert">
                            Available seats are required
                        </p>
                    )}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Enroll Fee* </span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter enroll fee"
                        className="input input-bordered"
                        {...register("price", { required: true })}
                    />
                    {errors.price?.type === "required" && (
                        <p className="text-red-600" role="alert">
                            Enroll fee is required
                        </p>
                    )}
                </div>

                <div className="form-control w-full pb-3">
                    <label className="label">
                        <span className="label-text">Choose class image*</span>
                    </label>
                    <input
                        type="file"
                        className="file-input w-full "
                        {...register("image", { required: true })}
                    />
                    {errors.image?.type === "required" && (
                        <p className="text-red-600" role="alert">
                            Image is required
                        </p>
                    )}
                </div>
                <input
                    type="submit"
                    className="btn bg-violet-500 hover:bg-violet-700 border text-white w-full font-bold p-2"
                    value="Add"
                />
            </form>
        </div>
    );
};

export default AddClass;