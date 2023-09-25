import React from "react";
import Container from "../components/Shared/Container";

const DonationDetails = () => {
  return (
    <Container>
      <div className="relative min-h-[450px] h-[70vh] w-full bg-[url('/assets/Health.png')] bg-cover">
        <div className="w-full h-[20%] bg-[#010101]/[.50] absolute bottom-0 left-0 flex items-center">
          <button className="text-white py-2 px-4 rounded-lg bg-[#FF444A] ml-4">
            Donate $290
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-black text-2xl md:text-3xl lg:text-4xl mb-3">
          Good Education
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          There are many things that can be done to ensure that all people have
          access to a good education. Governments can invest in public schools,
          provide financial assistance to students, and make sure that all
          schools have qualified teachers and resources. Families can support
          their children's education by creating a learning environment at home
          and helping them with their schoolwork. Teachers can create a positive
          and supportive learning environment for their students and challenge
          them to reach their full potential.
        </p>
      </div>
    </Container>
  );
};

export default DonationDetails;
