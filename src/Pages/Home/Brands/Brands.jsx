import React from "react";

import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const brandLogo = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="w-full py-10  overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">
        We've helped thousands of seals teams
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Wrapper with duplicated logos */}
        <div className="flex animate-scroll gap-10">
          {[...brandLogo, ...brandLogo].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 transform hover:scale-105 transition duration-300"
            >
              <img
                src={logo}
                alt="brand logo"
                className="w-24 md:w-28 h-auto opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Brands;
