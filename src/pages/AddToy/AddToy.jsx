import React, { useContext } from "react";
import post from "../../assets/61885-post.json";
import { useForm } from "react-hook-form";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const post = data;
    fetch("http://localhost:5000/addedToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.insertedId){
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        console.log(data);
      });
  };
  console.log(user);
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
                src={post}
              ></Player>
            </div>
            <div className="card  w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold">Added Toy!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Toy Name</span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("toyName", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seller Name</span>
                      </label>
                      <input
                        className="input input-bordered" defaultValue={user?.displayName}
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        className="input input-bordered" value={user?.email}
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("price", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Reating</span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("reating", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("quantity", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Sub Catagory</span>
                      </label>
                      <select
                        className="input input-bordered"
                        {...register("catagory")}
                      >
                        <option value="marvel">Marvel</option>
                        <option value="avengers">Avengers</option>
                        <option value="transformers">Transformers</option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("photo")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      className="input input-bordered"
                      {...register("description")}
                    />
                  </div>
                  <div className="text-center mt-2">
                    <input
                      type="submit"
                      value="Added Toy"
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

export default AddToy;
