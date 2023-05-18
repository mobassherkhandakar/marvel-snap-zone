import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/93385-login.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  }
    return (
      <>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content justify-around flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left">
              <Player autoplay loop src={login}></Player>
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
                      type="email"
                      value={email}
                      onChange={handleEmail}
                      required
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {emailError && <span className="err mt-2">{emailError}</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      onChange={handlePassword}
                      value={password}
                      required
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {passwordError && <span className="err mt-2">{passwordError}</span>}
                    <label className="label">
                      <a  className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                  {error && <span className="err">{error}</span>}
                </form>
                <p className='text-center'>Don't Have any accunt ? <Link className='text-orange-600 font-bold' to="/regester">Sign Up</Link> </p>
                <div className="divider">OR</div>
                <div className="text-center">
                  <button className="btn">
                    <FcGoogle className="text-3xl"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

};
export default Login;
