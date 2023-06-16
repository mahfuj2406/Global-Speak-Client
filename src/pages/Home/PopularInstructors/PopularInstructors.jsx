import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('https://global-speak-server-mahfuj2406.vercel.app/instructors')
        .then(res =>res.json())
        .then(data => setInstructors(data))
    },[])
    console.log(instructors);
  const popularInstructors = instructors?.slice(0, 6);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-20">
      
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {popularInstructors.map((data) => (
          <div key={data._id} className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img className="h-[400px] object-cover object-center" src={data?.photoUrl} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{data?.name}</h2>
              <p>Email: {data?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
