import React from "react";
import bannar from '../../../assets/bannar.jpg'
const Banner = () => {
  return (
    <div className="carousel h-[600px] mt-10">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://wallpapers.com/images/hd/4k-marvel-digital-cartoon-t9z4pnuivn6488jq.jpg" className="w-full rounded-xl" />
      <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7  w-1/2">
          <h2 className="font-bold text-4xl">"Welcome to Snap-Zone: A World of Imagination and Play!"</h2>
          <p className="text-xl text-gray-400">
            "Unleash the Power of Imagination with Action Figures Galore! Dive into a World of Heroes and Villains, where Epic Battles and Heroic Adventures Await. From Iconic Superheroes to Fearsome Monsters, Discover a Vast Collection of Action Figures that Bring Excitement and Imagination to Life. Get Ready to Play, Imagine, and Conquer!"
          </p>
          <div>
          <button className="btn btn-active bg-[#FF3811] mr-5">Discover More</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
        <a href="#slide4" className="btn btn-circle mr-4">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700547904-optimized.jpg" className="w-full rounded-xl" />
      <div className="absolute flex items-center rounded-xl  h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
          <h2 className="font-bold text-4xl">"Welcome to Snap-Zone: A World of Imagination and Play!"</h2>
          <p>
            "Unleash the Power of Imagination with Action Figures Galore! Dive into a World of Heroes and Villains, where Epic Battles and Heroic Adventures Await. From Iconic Superheroes to Fearsome Monsters, Discover a Vast Collection of Action Figures that Bring Excitement and Imagination to Life. Get Ready to Play, Imagine, and Conquer!"
          </p>
          <div>
          <button className="btn btn-active bg-[#FF3811] mr-5">Discover More</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
        <a href="#slide1" className="btn btn-circle mr-4">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://www.pixel4k.com/wp-content/uploads/2018/12/transformers-prime-4k_1546276362.jpg" className="w-full rounded-xl" />
      <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
          <h2 className="font-bold text-4xl">"Welcome to Snap-Zone: A World of Imagination and Play!"</h2>
          <p>
            "Unleash the Power of Imagination with Action Figures Galore! Dive into a World of Heroes and Villains, where Epic Battles and Heroic Adventures Await. From Iconic Superheroes to Fearsome Monsters, Discover a Vast Collection of Action Figures that Bring Excitement and Imagination to Life. Get Ready to Play, Imagine, and Conquer!"
          </p>
          <div>
          <button className="btn btn-active bg-[#FF3811] mr-5">Discover More</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
        <a href="#slide2" className="btn btn-circle mr-4">
          ❮
        </a>
        <a href="#slide4" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
  );
};

export default Banner;
