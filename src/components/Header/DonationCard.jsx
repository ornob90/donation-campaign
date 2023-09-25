import React from "react";

const DonationCard = () => {
  return (
    <div className="bg-[#0052FF]/[.15] rounded-b-lg">
      <img src="/assets/Health.png" alt="Health Image" />
      <div className="pl-2 py-2">
        <button
          type="button"
          className="bg-[#0052FF]/[.20] text-[#0052FF] font-medium py-1 px-2 text-sm rounded-md"
        >
          Health
        </button>
        <h3 className="text-[#0052FF] font-[600] text-lg ">
          Clean water for children
        </h3>
      </div>
    </div>
  );
};

export default DonationCard;
