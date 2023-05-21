import React from "react";
import bannar from "../../../assets/bannar.jpg";
import './Banner.css'
const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpapers.com/images/hd/4k-marvel-digital-cartoon-t9z4pnuivn6488jq.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">A World of Imagination and Play!"</h1>
      <p className="mb-5">"Unleash the Power of Imagination with Action Figures Galore! Dive into a World of Heroes and Villains, where Epic Battles and Heroic Adventures Await. From Iconic Superheroes to Fearsome Monsters, Discover a Vast Collection of Action Figures that Bring Excitement and Imagination to Life. Get Ready to Play, Imagine, and Conquer!"</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
