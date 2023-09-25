import React from "react";
import { useNavigate } from "react-router-dom";

const DonationCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("Health/1")}
      className="bg-[#0052FF]/[.15] rounded-b-lg active:scale-[1.1] duration-[.3s] transition-all ease-in-out hover:scale-[1.05]"
    >
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
