import Container from "../Shared/Container";
import React from "react";
import DonationCard from "./DonationCard";
import { useNavigate } from "react-router-dom";

const Donations = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <DonationCard onClick={() => navigate("Health/1")} />
      </div>
    </Container>
  );
};

export default Donations;
