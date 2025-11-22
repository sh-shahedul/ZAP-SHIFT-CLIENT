import React from 'react';
import Logo from '../Component/Logo/Logo';
import authImage from '../assets/authImage.png'
import { Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div className='  max-w-screen-2xl mx-auto bg-base-200  '>
             <div className='px-10 pt-5'>
                <Logo></Logo> 
                </div> 
            <div className="flex flex-col md:flex-row min-h-screen">
  {/* Left Side */}
  <div className="flex-1   items-center ">
    <Outlet />
  </div>

  {/* Right Side */}
  <div className="flex-1  flex items-center justify-center bg-lime-50 p-4">
    <img src={authImage} alt="Auth" className="max-w-full h-auto " />
  </div>
</div>
        </div>
    );
};

export default AuthLayout;