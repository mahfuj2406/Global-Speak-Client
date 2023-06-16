import  { useEffect, useState } from 'react';
import AllClassesCard from './AllClassesCard';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('https://global-speak-server-mahfuj2406.vercel.app/classes')
        .then(res =>res.json())
        .then(data =>setClasses(data))
    },[]);
    console.log(classes);
    return (
        <div className='w-11/12 mx-auto md:w-10/12 mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
            {
                classes.map(Class =><AllClassesCard 
                key={Class._id}
                Class={Class}
                >
                    
                </AllClassesCard>)
            }
        </div>
        </div>
    );
};

export default AllClasses;