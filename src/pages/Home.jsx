import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Header/Banner";
import Donations from "../components/Header/Donations";
import DonationContext from "../context/DonationContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const donationData = useContext(DonationContext);
  const [campaignData, setCampaignData] = useState(donationData);

  const handleQuery = (value) => {
    setQuery(value);
  };

  const handleSubmit = () => {
    if (!query) {
      setCampaignData(donationData);
      return;
    }

    setCampaignData(
      donationData.filter((donation) =>
        donation.category.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="">
      <Banner handleQuery={handleQuery} handleSubmit={handleSubmit} />
      <Donations campaignData={campaignData} />
    </div>
  );
};

export default Home;
