import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGalary = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  const photos = [
    {
      url: "https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.1.2134551033.1665579690&semt=ais",
    },
    {
      url: "https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.1.2134551033.1665579690&semt=ais",
    },
    {
      url: "https://img.freepik.com/premium-photo/car-gift-concept-human-holding-hands-palm-toy-car-with-red-ribbon-yellow-background-top-view-flat-lay-composition-best-offer-cars-sale-rent-template-presentation-show-vehicle_94095-150.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.2.2134551033.1665579690&semt=ais",
    },
    {
      url: "https://img.freepik.com/free-vector/boy-driving-mini-car-toy-white-background_1308-76150.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.2.2134551033.1665579690&semt=ais",
    },
    {
      url: "https://img.freepik.com/premium-photo/father-son-hands-toys_23-2148511208.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.2.2134551033.1665579690&semt=ais",
    },
    {
      url: "https://img.freepik.com/free-photo/high-angle-siblings-playing-with-toys_23-2148355142.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.2.2134551033.1665579690&semt=ais",
    }
  ];
  return (
    <div className="bg-base-200 py-4 my-con my-5">
      <h1 className="text-center my-4 font-bold text-4xl"> Toy Gaallery</h1>
      <div data-aos="zoom-in" className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden">
            <img src={photo.url} alt="photo" className="w-full rounded-md h-80" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalary;
