import React from 'react';
import serviceimg from '../../../assets/service.png'
const OurServices = () => {

           const services = [
  {
    title: "Express  & Standard Delivery",
    description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
  },
  {
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];
    return (
    <div className='pb-20'>
          <div className=' bg-secondary rounded-xl sm:p-10 py-20'>
       <h1 className=' text-3xl font-semibold text-white text-center pb-6'>Our Services</h1>
       <p className=' text-white max-w-[718px] mx-auto text-center pb-7'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-11/12 mx-auto'>
            {
                services.map((service,index)=>(
                <div key={index} className=' shadow-xl md:p-6 p-2 rounded-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:bg-primary ease-in-out bg-white h-[290px] text-center'>
                    <figure  className='flex justify-center items-center rounded-full  w-20 h-20 mx-auto bg-linear-to-b from-gray-200 to-white   '>
                        <img src={serviceimg} alt="" />
                    </figure>
                <h2 className="text-2xl font-bold mb-5 mt-5 text-secondary">{service.title}</h2>
                <h4 className="text-base font-semibold">{service.description}</h4>
                </div>
                ))
            }
        </div>
      </div>
    </div>
    );
};

export default OurServices;