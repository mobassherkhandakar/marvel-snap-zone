import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import up from "../../assets/89106-update.json";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useSetTitle";

const UpdateToy = () => {
  const loadToy = useLoaderData();
  useTitle('UpdateToy')
  const navigate = useNavigate();
  console.log(loadToy);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const price = from.price.value;
    const quantity = from.quantity.value;
    const description = from.description.value;
    // console.log(price, quantity, description);
    const update = {
      price: parseFloat(price),
      quantity: quantity,
      description: description,
    };
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-theta-peach.vercel.app/update/${loadToy._id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(update),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount) {
              Swal.fire("Saved!", "", "success");
              navigate("/mytoy");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <div>
        <div className=" min-h-fit py-12 bg-base-200">
          <div className="hero-content justify-around flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left">
              <Player
                autoplay
                style={{ height: "100%", width: "100%" }}
                loop
                src={up}
              ></Player>
            </div>
            <div className="card  w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold">Added Toy!</h1>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        className="input input-bordered"
                        defaultValue={loadToy?.price}
                        type="text"
                        name="price"
                        placeholder="price"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        className="input input-bordered"
                        defaultValue={loadToy?.quantity}
                        type="text"
                        placeholder="quantity"
                        name="quantity"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      className="input input-bordered"
                      defaultValue={loadToy?.description}
                      type="text"
                      name="description"
                      placeholder="description"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <input
                      type="submit"
                      value="Updated"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;
