import React from "react";

const Banner = () => {
  return (
    <div className="bg-opacity-10 relative bg-banner w-full min-h-[300px] h-[80vh] flex flex-col z-[2] justify-center items-center gap-12">
      <h1 className="z-[10] text-center text-black font-bold text-2xl sm:text-4xl lg:text-5xl">
        I Grow By Helping People In Need
      </h1>
      <div className="z-[10] flex items-center justify-center w-full">
        <input
          className="w-[50%] md:w-[30%] lg:w-[20%] border-[1px] border-gray-200 pl-2 py-2 rounded-l-lg"
          type="text"
          placeholder="Search Here"
        />
        <button className="text-white py-2 px-4 rounded-r-lg bg-[#FF444A]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
