import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../components/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return <Spinner/>
  }
  if(!user){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }

  return children;
};

export default PrivetRouter;