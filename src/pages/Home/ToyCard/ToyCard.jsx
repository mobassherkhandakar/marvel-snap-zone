import React, { useContext, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { _id, toyName, photo, reating, price } = toy;
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  const handleTost = () => {
    if (!user?.email) {
      toast.error("You have to log in first to view details");
    }
  };
  return (
    <>
      <div  data-aos="flip-left" className="card mx-auto border-b-4 border-red-700 card-compact w-full object-center h-96 bg-base-100 shadow-xl">
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
            <Link
              className="btn btn-primary"
              onClick={handleTost}
              to={`/toydeteil/${_id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
