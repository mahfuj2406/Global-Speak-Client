import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res =>res.json())
        .then(data =>setClasses(data))
    },[]);
    console.log(classes);
  const popularClasses = classes.sort((a, b) => b.enroll_students - a.enroll_students).slice(0, 6);
  console.log("Popular classes : ", popularClasses);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
        
      <SectionTitle heading={"Popular Classes"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {popularClasses.map((data) => (
          <div key={data._id} className="card card-compact  bg-base-100 shadow-xl">
            <img
              className="h-[300px] rounded-2xl rounded-top object-cover object-center"
              src={data?.classImageURL}
              alt=""
            />
            <div className="card-body">
              <h2 className="card-title justify-center">{data?.className}</h2>
              <p>Enrolled Students: {data?.enroll_students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
