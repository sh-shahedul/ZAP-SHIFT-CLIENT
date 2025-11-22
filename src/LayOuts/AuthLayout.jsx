import React from 'react';
import Logo from '../Component/Logo/Logo';
import authImage from '../assets/authImage.png'
import { Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div className=' min-h-screen max-w-screen-2xl mx-auto bg-base-200  '>
             <Logo></Logo>  
             <div className=' flex justify-between items-center'>
                <div>
                    <Outlet></Outlet>
                </div>
                <div className='border'>
                    <img src={authImage} alt="" />
                </div>
             </div>
        </div>
    );
};

export default AuthLayout;