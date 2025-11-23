import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const {googleSignIn}=useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    console.log('location on social',location)
    const handelGoogle =()=>{
           googleSignIn()
           .then(result=>{
            console.log(result.user)
            navigate(location.state || '/')
           })
           .then(error=>{
            console.log(error)
           })
    }

    return (
        <div>
             {/* OR Divider */}
        <div className="divider before:bg-lime-300 after:bg-lime-300 my-4">OR</div>

        {/* GOOGLE BUTTON */}
        <button onClick={handelGoogle}  className="w-full flex items-center justify-center gap-2 py-2 bg-white text-black border border-lime-300 rounded-full hover:bg-lime-100 transition-colors font-bold">
          <FcGoogle /> Login with Google
        </button> 
        </div>
    );
};

export default SocialLogin;