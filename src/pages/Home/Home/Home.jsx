import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGalary from '../photoGalary/photoGalary';
import Catagory from '../Catagory/Catagory';
import useTitle from '../../../Hooks/useSetTitle';

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Banner/>
      <PhotoGalary/>
      <Catagory/>
    </div>
  );
};

export default Home;