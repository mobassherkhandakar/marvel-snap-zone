import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[500px]" style={{ backgroundImage: `url("https://www.vcclite.com/wp-content/uploads/2017/04/Toy-CE-Case-Study-Banner-v2.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-neutral-content">
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
