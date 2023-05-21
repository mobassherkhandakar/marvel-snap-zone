import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useSetTitle";

const AllToy = () => {
  useTitle('AllToy')
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://toy-marketplace-server-theta-peach.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-theta-peach.vercel.app/getToy/${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  // console.log(search);
  return (
    <div>
      <h1 className="text-center p-5 font-bold text-3xl">All Toy</h1>
      <div className="p-2 text-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="p-2 mr-2 input input-bordered"
        />
        <button onClick={handleSearch} className="btn btn-info">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{toy?.name}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.catagory}</td>
                <td>$ {toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td className="btn btn-accent"><Link to={`/toydeteil/${toy?._id}`}>View Details </Link> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
