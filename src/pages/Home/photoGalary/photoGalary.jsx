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
      url: "https://img.freepik.com/premium-photo/cyberpunk-warrior-man-futuristic-soldier-3d-render-illustration_691560-6127.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.2.2134551033.1665579690&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-vector/robot-transformer-form-android-car-isolated-vector-cartoon-illustration-futuristic-cyborg-mechanical-soldier-cyborg-character_107791-3054.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.1.2134551033.1665579690&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-vector/red-robot-transformer-alien-invader-spaceship_107791-510.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.1.2134551033.1665579690&semt=sph",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJ2YR9uvjSE9BZON02t4Zpl5x4jWbtnlvNw&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2TElFZDB37MlNXwtnBtHA5rYntMcwzuY8w&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJKpK8qBZw_xk3UD1-sbLeCDf8IC8kK5_Hg&usqp=CAU",
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
