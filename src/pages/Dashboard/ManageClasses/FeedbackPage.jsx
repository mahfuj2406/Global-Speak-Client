import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const FeedbackPage = () => {
    const {id} = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {

                const feedbackData = { feedback: data.feedback }
                console.log(feedbackData);
                fetch(`http://localhost:5000/feedback/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(feedbackData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Feedback Done!',
                                showConfirmButton: false,
                                timer: 1600
                            });
                            navigate('/dashboard/allClasses');
                        }



            })
            .catch(error => console.log("feedback error :",error))
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-violet-500">Provide Feedback</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" {...register("feedback", { required: true })} name='feedback' placeholder="enter feedback description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 ">
                                <button type='submit' className="btn bg-violet-300 border-0 hover:border hover:bg-violet-600 hover:text-white">Feedback</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;