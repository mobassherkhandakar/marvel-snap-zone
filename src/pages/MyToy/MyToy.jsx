import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("high");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-theta-peach.vercel.app/mytoy/${user?.email}?sort=${selectedOption}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [user, selectedOption]);
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-theta-peach.vercel.app/mytoy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remennig = toys.filter((toy) => toy._id !== id);
            setToys(remennig);
          });
      }
    });
  };

  const handleSortOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // console.log(toys);
  return (
    <div>
      <h1 className="text-center p-5 font-bold text-3xl">MY Toy</h1>
      <div className="overflow-x-auto w-full">
        <div className="text-end my-4 mr-1">
          <select
            value={selectedOption}
            onChange={handleSortOptionChange}
            className="select input  input-bordered input-success w-full max-w-xs "
          >
            <option disabled selected>
              Sort By High Price and Low Price!
            </option>
            <option value="low">High Price</option>
            <option value="high">Low Price</option>
          </select>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>no</th>
              <th>Photo</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>Sub-category</th>
              <th>Reating</th>
              <th>Price</th>
              <th>description</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={toy?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{toy?.name}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.quantity}</td>
                <td>{toy?.catagory}</td>
                <td>
                  <Rating
                    placeholderRating={toy?.reating}
                    emptySymbol={<FaRegStar />}
                    readonly
                    placeholderSymbol={<FaStar className="text-yellow-500" />}
                    fullSymbol={<FaStar />}
                  ></Rating>
                  {toy?.reating}
                </td>
                <td>$ {toy?.price}</td>
                <td>{toy?.description}</td>

                <td>
                  <Link to={`/update/${toy._id}`}>
                    <button className="btn btn-success btn-xs">Update</button>
                  </Link>
                </td>
                <td>
                  <span onClick={() => deleteHandler(toy._id)}>
                    <RiDeleteBin2Fill className="text-3xl text-red-700 cursor-pointer" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
