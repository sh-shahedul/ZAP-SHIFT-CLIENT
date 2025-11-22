import React from "react";
import topRight from "../../../assets/location-merchant.png";
import left from "../../../assets/be-a-merchant-bg.png";

const CustomerSetisfection = () => {
  return (
    <div className="relative bg-secondary p-6 sm:p-10 md:pt-16 sm:pt-20 rounded-xl overflow-hidden mb-20">

      
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${topRight}), url(${left})`,
          backgroundPosition: "top 30px right 50px, top 0px left 70px",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "700px 300px, 1050px 180px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 pl-2 sm:pl-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-[700px] leading-tight mb-4  md:text-left text-center">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>

        <p className="max-w-xl text-white mb-5 text-sm sm:text-base md:text-left text-center">
          We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
        </p>

        <div className="flex flex-wrap gap-3 mt-3 md:justify-start justify-center pb-5 ">
          <button className="bg-primary  rounded-full px-5 py-2 font-bold text-sm sm:text-base">
            Become a Merchant
          </button>

          <button className="border-2 border-lime-300 text-lime-300 rounded-full px-5 py-2 font-bold text-sm sm:text-base">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSetisfection;
