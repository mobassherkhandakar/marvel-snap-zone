import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useForm } from "react-hook-form";
import up from "../../assets/89106-update.json";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const loadToy = useLoaderData()
  // console.log(loadToy);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        className="input input-bordered"
                        defaultValue={loadToy?.price}
                        {...register("price", { required: true })}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        className="input input-bordered" defaultValue={loadToy?.quantity}
                        {...register("quantity", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      className="input input-bordered" defaultValue={loadToy?.description}
                      {...register("description")}
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
    </div>
  );
};

export default UpdateToy;
