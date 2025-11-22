import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  const content = {
    Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. 
Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,

    Mission: `Our mission is to provide seamless and reliable parcel delivery solutions for everyone. 
We aim to continuously improve our logistics, customer service, and technology to meet and exceed expectations.`,

    Success: `Thousands of businesses and individuals trust us daily. 
Our success is measured by customer satisfaction, timely deliveries, and the growth of our partnerships worldwide.`,

    "Team & Others": `Our team consists of dedicated professionals committed to excellence. 
From logistics experts to customer support, everyone plays a role in ensuring smooth operations and happy customers.`,
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 md:px-8">
      {/* Heading and Description */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            About Us
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
         
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-gray-200 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm md:text-base font-medium transition-colors ${
              activeTab === tab
                ? "text-lime-700 border-b-2 border-lime-500"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 text-justify space-y-4">
        <p>{content[activeTab]}</p>
        <p>{content[activeTab]}</p>
        <p>{content[activeTab]}</p>
        {/* Small HR under content like in the image */}
      
      </div>

      
    </div>
  );
};

export default AboutUs;
