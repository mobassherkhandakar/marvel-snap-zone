import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

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

  const logOutUser = () =>{
    signOut(auth)
    .then(result => console.log(result))
    .catch(error=> console.log(error.message))
  }

  useEffect(()=>{
  const monitor = onAuthStateChanged(auth, (siginUser)=>{
      setUser(siginUser)
      setLoading(false)
    })
    return ()=> {
      monitor()
    }
  },[])

const authInfo = {
  user,
  loading,
  setLoading,
  CreateUser,
  loginUser,
  logOutUser
} 

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;