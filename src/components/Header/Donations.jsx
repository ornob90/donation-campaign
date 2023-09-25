import Container from "../Shared/Container";
import React, { useContext } from "react";
import DonationCard from "./DonationCard";
import DonationContext from "../../context/DonationContext";

const Donations = ({ campaignData }) => {
  return (
    <Container>
      <div className="gap-4 mt-10 mb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {campaignData.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
    </Container>
  );
};

export default Donations;
