import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Shared/Container";
import { useNavigate, useParams } from "react-router-dom";
import DonationContext from "../context/DonationContext";
import swal from "sweetalert";
import { addDonationsInLS } from "../utilities/localStorage";

const DonationDetails = () => {
  const { type, id } = useParams();

  const [donate, setDonate] = useState({});
  const donationList = useContext(DonationContext);
  const navigate = useNavigate();
  const categories = ["Health", "Education", "Food", "Clothing"];

  useEffect(() => {
    setDonate(donationList.find((donation) => donation.id === Number(id)));
  }, [donationList, id]);

  useEffect(() => {
    console.log(type);
    if (!categories.includes(type)) navigate("/error");
  }, [type]);

  const handleDonate = () => {
    addDonationsInLS(id);
    swal("Thank you", "You have successfully donated", "success");
  };

  return (
    <Container>
      <div className={`relative min-h-[450px] h-[80vh]  w-full `}>
        <img
          className="object-bottom w-full h-full"
          src={donate?.image}
          alt=""
        />
        <div className="w-full h-[20%] bg-[#010101]/[.50] absolute bottom-0 left-0 flex items-center">
          <button
            onClick={handleDonate}
            className={`text-white py-2 px-4 rounded-lg bg-[#FF444A] ml-4 ${
              donate?.category === "Clothing"
                ? "bg-clothing"
                : donate?.category === "Health"
                ? "bg-health"
                : donate?.category === "Food"
                ? "bg-food"
                : "bg-education"
            }`}
          >
            Donate ${donate?.price}
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="mb-3 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
          {donate?.title}
        </h1>
        <p className="text-sm text-gray-700 md:text-base">
          {donate?.description}
        </p>
      </div>
    </Container>
  );
};

export default DonationDetails;
