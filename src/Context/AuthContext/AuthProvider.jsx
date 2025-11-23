import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
   const [user,setUser]= useState(null)
   const[loading,setLoading] =useState(true)


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

  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('current user in  Auth ',currentUser)
        setUser(currentUser)
        setLoading(false)
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
            updateUserProfile,
            user,
            loading,
          }
    return (

          
      
          <AuthContext value={authInfo}>
            {children}
          </AuthContext>
      
    );
};

export default AuthProvider;