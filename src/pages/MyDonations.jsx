import React from "react";
import Container from "../components/Shared/Container";
import CategoryBtn from "../components/Shared/CategoryBtn";

const MyDonations = () => {
  return (
    <Container>
      <div className="grid mt-12 grid-cols-1 lg:grid-cols-2">
        <div className="flex bg-[#0052FF]/[.15] rounded-lg gap-2">
          <div className="w-[40%] md:w-[30%]">
            <img
              className="rounded-l-lg w-full h-full object-cover"
              src="/assets/Health.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 py-4 pr-1 lg:p-4">
            <div>
              <CategoryBtn color="#0052FF">Health</CategoryBtn>
            </div>
            <p className="text-black font-bold text-md  md:text-xl">
              Clean water for children
            </p>
            <p className="text-sm  text-[#0052FF]">$290.00</p>
            <div>
              <button className="text-white py-1 lg:py-2 px-5 lg:px-8 rounded-lg text-sm lg:text-base bg-[#0052FF]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="mt-10 bg-[#009444] text-white py-2 px-4 rounded-lg">
          See More
        </button>
      </div>
    </Container>
  );
};

export default MyDonations;
