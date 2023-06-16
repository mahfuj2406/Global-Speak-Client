import { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('https://global-speak-server-mahfuj2406.vercel.app/instructors')
        .then(res =>res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div className='w-11/12 mx-auto md:w-10/12 mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                instructors.map(instructor =><InstructorCard
                key={instructor._id}
                instructor={instructor}
                ></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default Instructors;