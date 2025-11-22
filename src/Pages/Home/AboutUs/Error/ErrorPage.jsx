import React from 'react';
import error from '../../../../assets/error-404.png'
import { Link } from 'react-router';


import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';


const ErrorPage = () => {
    return (
        <div>
          <NavBar></NavBar>
        <div className=''>
            <div className='flex flex-col justify-center items-center md:p-30 p-5'>
                <img className='md:w-[300px] w-[150px]' src={error} alt="" />
            <h1 className='md:text-4xl text-2xl font-bold mt-5'>Oops, page not found!</h1>
            <p className='md:text-lg text-base text-gray-500 font-medium mt-5'>The page you are looking for is not available.</p>
           <Link className="btn px-8 bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none text-white mt-5" to='/'>Go Back</Link>
            </div>
        </div>
          <Footer></Footer>
        </div>
    );
};

export default ErrorPage;