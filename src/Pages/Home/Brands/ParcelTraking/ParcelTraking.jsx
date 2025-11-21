import React from 'react';
import liveParcel from '../../../../assets/live-tracking.png'
import safeDelevery from '../../../../assets/safe-delivery.png'

const ParcelTraking = () => {
          const parcelTrack = [
  { 
    image : liveParcel,
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
     image : safeDelevery,
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
     image : safeDelevery,
    title: "24/7 Call Center Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  }
];

    return (
        // <div>
        //       {
        //         parcelTrack.map(track=>

        //             <div className=' sm:flex gap-70 items-center   '>
        //               <div>
        //                 <img className='w-2xl' src={track.image} alt="" />
        //               </div>
        //               <div>

        //                 <h2 className='text-2xl text-secondary font-semibold'>{track.title}</h2>
        //                 <p className=''>{track.description}</p>
        //               </div>


        //             </div>
        //         )
        //       }
        // </div>


  <div className="bg-gray-100 py-10 px-4 md:px-16">
  {parcelTrack.map((track, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-10 bg-white shadow-lg rounded-lg mb-6 transition-transform  duration-300 ease-in-out hover:scale-105 "
    >
      <div className="">
        <img
          className="w-full max-w-xs md:max-w-sm object-contain"
          src={track.image}
          alt={track.title}
        />
        
      </div>

       <div className="hidden md:block border-l-3 border-dotted border-gray-400 h-42"></div>

      <div className="text-center md:text-left">
        <h2 className="text-2xl text-secondary font-bold mb-2">{track.title}</h2>
        <p className="text-gray-600">{track.description}</p>
      </div>
    </div>
  ))}

    <div className="border-b-3 border-dotted border-gray-400 mt-15 "></div>
</div>
    );
};

export default ParcelTraking;