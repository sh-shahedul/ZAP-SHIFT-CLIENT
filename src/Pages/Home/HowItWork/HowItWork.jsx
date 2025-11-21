import React from 'react';
import workimg from '../../../assets/bookingIcon.png'

const HowItWork = () => {
  
    const howItWorksData = [
  {
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];




    return (

        <div className=' py-20 w-11/12 mx-auto'>
            <h1 className='text-2xl font-bold mb-7'>How it Works</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
              {
              howItWorksData.map((work, index) => (
            <div key={index} className=" p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 ">
                <img src={workimg} alt="" />
             
              <h3 className="text-xl font-bold mb-5 mt-5 text-secondary">{work.title}</h3>
              <p className="text-base font-semibold">{work.description}</p>
            </div>
          ))
          }
        </div>
        </div>
    );
};

export default HowItWork;