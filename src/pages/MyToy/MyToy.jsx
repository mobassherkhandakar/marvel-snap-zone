import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [user]);
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
        fetch(`http://localhost:5000/mytoy/${id}`, {
          method: "DELETE",
        })
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
  // console.log(toys);
  return (
    <div>
      <h1 className="text-center p-5 font-bold text-3xl">MY Toy</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy, index) => (
              <tr key={index}>
                <th>
                  <span onClick={() => deleteHandler(toy._id)}>
                    <RiDeleteBin2Fill className="text-3xl cursor-pointer" />
                  </span>
                </th>
                <td>{toy?.toyName}</td>
                <td>{toy?.quantity}</td>
                <td>{toy?.description}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
