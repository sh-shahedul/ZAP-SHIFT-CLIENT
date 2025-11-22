import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
   const [user,setUser]= useState(null)


  const registerUser = (email ,password)=>{
    return createUserWithEmailAndPassword(auth,email ,password)
  }

  const signInUser = (email ,password)=>{
    return signInWithEmailAndPassword(auth,email ,password)
  }
  const googleSignIn = ()=>{
       return signInWithPopup(auth,googleProvider)
  }

  const signOutUser  =  ()=>{
    return  signOut(auth)
  }


  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('current user in  Auth ',currentUser)
        setUser(currentUser)
      })
      return ()=>{
        unSubscribe()
      }

  },[])





    const authInfo ={
            registerUser,
            signInUser,
            googleSignIn,
            signOutUser,
            user,
          }
    return (

          
      
          <AuthContext value={authInfo}>
            {children}
          </AuthContext>
      
    );
};

export default AuthProvider;