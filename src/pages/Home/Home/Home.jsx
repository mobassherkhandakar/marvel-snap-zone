import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGalary from '../photoGalary/photoGalary';
import Catagory from '../Catagory/Catagory';
import useTitle from '../../../Hooks/useSetTitle';
import Sponser from '../Sponser/Sponser';
import Contact from '../Contract/Contact';

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Banner/>
      <PhotoGalary/>
      <Catagory/>
      <Sponser/>
      <Contact/>
    </div>
  );
};

export default Home;