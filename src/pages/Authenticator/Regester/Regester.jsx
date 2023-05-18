import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import regester from "../../../assets/38435-register.json"

const Regester = () => {
  return (
    <div>
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content justify-around flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <Player autoplay loop src={regester}></Player>
          </div>
          <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;