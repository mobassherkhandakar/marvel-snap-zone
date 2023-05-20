import React, { useEffect, useState } from "react";
import "./catagory.css";
import ToyCard from "../ToyCard/ToyCard";

const Catagory = () => {
  const [activeTab, setActiveTab] = useState("marvel");
  const [toys, setToys]= useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/getToyByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div>
        <h1 className=" text-center font-bold text-3xl mt-5 p-5">
          Toy Catagories
        </h1>
        <div className=" text-center">
          <div className="text-center w-full m-auto">
            <div className="tabs flex justify-center  items-center">
              <div
                onClick={() => handleTabClick("marvel")}
                className={`tab-active rounded-md cursor-pointer mr-1 p-2 ${
                  activeTab == "marvel" ? " bg-red-600 text-white" : ""
                }`}
              >
                Marvel
              </div>
              <div
                onClick={() => handleTabClick("avengers")}
                className={`tab-active rounded-md cursor-pointer mr-1 p-2 ${
                  activeTab == "avengers" ? " bg-red-600 text-white" : ""
                }`}
              >
                Avengers
              </div>
              <div
                onClick={() => handleTabClick("transformers")}
                className={`tab-active rounded-md cursor-pointer mr-1 p-2 ${
                  activeTab == "transformers" ? " bg-red-600 text-white" : ""
                }`}
              >
                Transformers
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {toys?.map((toy) => (
            <ToyCard toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
