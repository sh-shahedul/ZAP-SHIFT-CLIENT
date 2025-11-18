import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import NavBar from '../Pages/Home/Shared/NavBar/NavBar';

const RootLayOut = () => {
    return (
        <div className=' flex flex-col min-h-screen max-w-screen-2xl mx-auto'>
             <NavBar></NavBar>

             <div className=' flex-1'>
                <Outlet></Outlet>
             </div>

             <Footer></Footer>
        </div>
    );
};

export default RootLayOut;