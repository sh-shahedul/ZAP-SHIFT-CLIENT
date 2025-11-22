import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
      
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer: "Yes, it is designed to fit different age groups and body types comfortably.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer: "Yes, proper use can significantly improve posture and reduce back pain.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer: "Some models include vibration alerts to remind you to straighten your posture.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer: "You will receive an email notification when the product is available.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-4">

      {/* FAQ Section Title */}
      <h2 className="text-3xl font-bold text-secondary text-center mb-2">
        Frequently Asked Question (FAQ)
      </h2>

      <p className="text-center max-w-2xl mx-auto text-gray-500 mb-6">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* FAQ Items */}
      {faqs.map((item, index) => (
        <div
          key={index}
          tabIndex={0}
          className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl ${
            item.open ? "collapse-open bg-[#E6F4F4]" : ""
          }`}
        >
          <div className="collapse-title font-semibold text-lg">
            {item.question}
          </div>

          <div className="collapse-content text-sm text-gray-600">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}

      {/* Button */}
      <div className="text-center mt-6">
        <button className="btn bg-lime-400  font-bold rounded-2xl px-8">
          See More FAQ’s 
        </button>
      </div>
    </div>
  );
};

export default FAQ;
