import React, { createContext, useContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const CreateUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }


const authInfo = {
  user,
  loading,
  setLoading,
  CreateUser,
  setUser,
  loginUser
} 

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;