import React from "react";
import { motion } from "framer-motion";

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
    <div className="w-full py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">
        We've helped thousands of seals teams
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate logos for seamless scroll */}
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
        </motion.div>
      </div>
     </div>
  );
};

export default Brands;

