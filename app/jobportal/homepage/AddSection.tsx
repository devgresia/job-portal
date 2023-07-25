"use client";
import React, { useState } from "react";

const AdSection: React.FC = () => {
  const [isAdVisible, setIsAdVisible] = useState(true);

  const handleAdClose = () => {
    setIsAdVisible(false);
  };

  // Example of a banner ad
  return (
    <>
      {isAdVisible && (
        <div className="bg-white absolute p-2 rounded-lg shadow-md mt-8 left-2 w-20  md:w-32 ">
          {/* <button
            className="absolute top-0 right-0 p-2 text-red-500"
            onClick={handleAdClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
          <h2 className="text-lg font-semibold mb-4">Ad Section</h2>
          <div>
            <img
              src="/glogo.png"
              alt="Advertisement Banner"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <p className="mt-2 text-sm">
            Check out our new product! Use code "AD123" for a discount.
          </p>
          <div className="mt-10">
            <img
              src="/glogo.png"
              alt="Advertisement Banner"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <p className="mt-2 text-sm">
            Check out our new product! Use code "AD123" for a discount.
          </p>
          <div className="mt-10">
            <img
              src="/glogo.png"
              alt="Advertisement Banner"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <p className="mt-2 text-sm">
            Check out our new product! Use code "AD123" for a discount.
          </p>
          {/* Additional ad content */}
        </div>
      )}
    </>
  );
};

export default AdSection;
