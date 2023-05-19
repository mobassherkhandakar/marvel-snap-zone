import React, { useEffect, useState } from "react";

const AllToy = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
  const handleSearch = ()=>{
    fetch(`http://localhost:5000/getToy/${search}`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data);
      setToys(data)
    })
  }
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
          <button onClick={handleSearch} className="btn btn-info" >Search</button>
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
                <td className="btn btn-accent">View Details </td>
              </tr>
            ))}
            {/* <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
