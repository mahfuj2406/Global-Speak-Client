import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { name, email, photoUrl } = instructor;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-8/12' src={photoUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Email : {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;