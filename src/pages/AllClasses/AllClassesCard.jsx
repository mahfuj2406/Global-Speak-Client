import React from 'react';

const AllClassesCard = ({ Class }) => {
    const { className, classImageURL, instructorName, availableSeat, price } = Class;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={classImageURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>{instructorName}</p>
                <div className="card-actions justify-end">
                    <p>Available Seat: {availableSeat}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;