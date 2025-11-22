import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const ReviewCard = ({ review }) => {
  return (
   

    <div className="max-w-sm bg-white p-6 rounded-2xl shadow border border-gray-200">

      {/* Quote Icon */}
      <div className=" text-3xl mb-3">
        <RiDoubleQuotesL />
      </div>

      {/* Review Text */}
      <p className=" mb-4">
        {review.review}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.user_photoURL}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {review.userName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
