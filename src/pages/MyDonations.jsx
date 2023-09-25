import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Shared/Container";

import { getDonationsFromLS } from "../utilities/localStorage";
import DonationContext from "../context/DonationContext";
import { useNavigate } from "react-router-dom";
import MyDonationCard from "../components/MyDonation/MyDonationCard";

const MyDonations = () => {
  const [donations, setDonations] = useState(null);
  const allDonations = useContext(DonationContext);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const myDonationsIds = getDonationsFromLS();

    const newDonateArray = [];

    myDonationsIds.forEach((myId) => {
      const donateObj = allDonations.find(({ id }) => `${id}` === myId);
      newDonateArray.push(donateObj);
    });
    setDonations(newDonateArray);

    setSeeMore(newDonateArray?.length > 4);
  }, []);

  return (
    <Container>
      <div className="grid gap-4 mt-12 grid-cols-1 lg:grid-cols-2">
        {seeMore
          ? donations
              ?.slice(0, 4)
              .map((donation, idx) => (
                <MyDonationCard key={idx} donation={donation} />
              ))
          : donations?.map((donation, idx) => (
              <MyDonationCard key={idx} donation={donation} />
            ))}
      </div>

      <div className="w-full flex justify-center items-center">
        {donations?.length > 4 && (
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="mt-10 bg-[#009444] text-white py-2 px-4 rounded-lg"
          >
            {seeMore ? "See All" : "See Less"}
          </button>
        )}
      </div>
    </Container>
  );
};

export default MyDonations;
