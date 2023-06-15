
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Global Speak || payment History </title>
      </Helmet>
      <div className="overflow-x-auto bg-base-300 p-5 my-20 mx-10 rounded-lg shadow-xl">
        <table className="table ">
          <thead>
            <tr className="bg-black text-white">
              <td className="text-center"></td>
              <td className="text-center">Class Image </td>
              <td className="text-center">Class Name</td>

              <td className="text-center">Enroll Fee</td>
              <td className="text-center">Transaction Id</td>
              <td className="text-center">Payment Date</td>
            </tr>
          </thead>
          <tbody>
            {payments.map((data, index) => (
              <tr key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data?.class?.classImageURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="text-center">{data?.class?.className}</td>

                <td className="text-center">${data?.class?.price}</td>
                <td className="text-center font-semibold">{data?.transactionId}</td>
                <td>{data?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
