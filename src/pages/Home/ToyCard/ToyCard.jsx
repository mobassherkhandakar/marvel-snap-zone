import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyCard = ({ toy }) => {
  const { toyName, photo, reating, price } = toy;
  return (
    <>
      <div className="card border-b-4 border-red-700 card-compact w-96 object-center h-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-screen" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {toyName}</h2>
          <h2 className="card-title"> Price: ${price}</h2>
          <p>
            <span className="font-semibold text-lg">Reating:</span>
            <Rating
              placeholderRating={reating}
              emptySymbol={<FaRegStar />}
              readonly
              placeholderSymbol={<FaStar className="text-yellow-500" />}
              fullSymbol={<FaStar />}
            ></Rating>
            {reating}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
