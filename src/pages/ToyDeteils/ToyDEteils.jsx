import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import post from "../../assets/56438-man-with-task-list.json";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDEteils = () => {
  const { photo, toyName, reating, price, name, email, quantity, description } =
    useLoaderData();
  // console.log(loadData);

  return (
    <div>
      <div className=" bg-base-200">
        <div className="flex justify-around flex-col lg:flex-row">
          
          <div className="card w-1/2 h-auto bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-96" src={photo} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {toyName} </h2>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Price: ${price}</p>

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
              <p>Quantity: {quantity}</p>
              <p>Description: {description}</p>
            </div>
          </div>
          <div className="w-1/2">
            <Player
              style={{ height: "100vh", width: "100%" }}
              autoplay
              loop
              src={post}
            ></Player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDEteils;
