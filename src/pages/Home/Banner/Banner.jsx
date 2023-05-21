import React from "react";
import bannar from '../../../assets/bannar.jpg'
const Banner = () => {
  return (
    <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${bannar})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" my-con text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
