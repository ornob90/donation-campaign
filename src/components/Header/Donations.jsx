import Container from "../Shared/Container";
import React from "react";
import DonationCard from "./DonationCard";

const Donations = () => {
  return (
    <Container>
      <div className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <DonationCard />
      </div>
    </Container>
  );
};

export default Donations;
