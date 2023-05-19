import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useState } from "react";
import regester from "../../../assets/38435-register.json";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Regester = () => {
  const {CreateUser} = useContext(AuthContext)
  const [error, setError] = useState()
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const photo = form.photo.value;
    setError('')

    CreateUser(email, password)
    .then(result=>{
      const user = result.user
      console.log(user);
      updateUserInf(user, name, photo)
      navigate(from, {replace: true})
    })
    .catch(error=>{
      console.log(error.message);
      setError(error.message)
    })
  };

 const updateUserInf =(user, name, photo)=>{
  updateProfile(user , {
    displayName: name, 
    photoURL: photo
  })
  .then(()=>{})
  .catch(error=>{
    setError(error.message)
  })
 }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content justify-around flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <Player autoplay loop src={regester}></Player>
          </div>
          <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Regester now!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    required
                    placeholder="Photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                {error && <span className="err">{error}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
