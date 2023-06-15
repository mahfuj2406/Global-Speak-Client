
import { Helmet } from 'react-helmet';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyEnrolledClasses = () => {
    const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollClasses = [], refetch } = useQuery({
    queryKey: ["enrollClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollclass/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-full px-2 md:px-10">
      <Helmet>
        <title>Enroll Classes | MartialArt</title>
      </Helmet>
      <div className="overflow-x-auto bg-base-300 p-5 my-20 rounded-lg shadow-xl">
        <table className="table table-md table-pin-rows table-pin-cols ">
          <thead>
            <tr className="bg-black text-white">
              <td className="text-center"></td>
              <td className="text-center">Class Image </td>
              <td className="text-center">Class Name</td>
              <td className="text-center">Instructor Info</td>
              {/* <td className="text-center">Enrolled Students</td> */}
            </tr>
          </thead>
          <tbody>
            {enrollClasses.map((data, index) => (
              <tr key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data.classImageURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="text-center">{data.className}</td>
                <td className="text-center">
                  <p>{data.instructorName}</p>
                  <p>{data.instructorEmail}</p>
                </td>
                {/* <td className="text-center">{data?.enroll_students + 1}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyEnrolledClasses;