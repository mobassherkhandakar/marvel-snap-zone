import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const UpdateLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateLayout;