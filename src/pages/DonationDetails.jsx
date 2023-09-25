import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Shared/Container";
import { useParams } from "react-router-dom";
import DonationContext from "../context/DonationContext";

const DonationDetails = () => {
  const { id } = useParams();

  const [donate, setDonate] = useState({});
  const donationList = useContext(DonationContext);

  useEffect(() => {
    setDonate(donationList.find((donation) => donation.id === Number(id)));
  }, [donationList, id]);

  return (
    <Container>
      <div className={`relative min-h-[450px] h-[70vh] w-full `}>
        <img
          className="w-full h-full  object-bottom"
          src={donate?.image}
          alt=""
        />
        <div className="w-full h-[20%] bg-[#010101]/[.50] absolute bottom-0 left-0 flex items-center">
          <button className="text-white py-2 px-4 rounded-lg bg-[#FF444A] ml-4">
            Donate ${donate?.price}
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-black text-2xl md:text-3xl lg:text-4xl mb-3">
          {donate?.title}
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          {donate?.description}
        </p>
      </div>
    </Container>
  );
};

export default DonationDetails;
