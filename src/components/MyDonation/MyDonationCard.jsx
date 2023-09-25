import React from "react";
import CategoryBtn from "../Shared/CategoryBtn";

const MyDonationCard = ({ donation }) => {
  const { id, image, title, category, price } = donation;
  return (
    <div
      key={id}
      className={`flex rounded-lg gap-2 ${
        category === "Clothing"
          ? "bg-clothing/[.15]"
          : category === "Health"
          ? "bg-health/[.15]"
          : category === "Food"
          ? "bg-food/[.15]"
          : "bg-education/[.15]"
      }`}
    >
      <div className="w-[40%] md:w-[30%]">
        <img
          className="rounded-l-lg w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 py-4 pr-1 lg:p-4">
        <div>
          <CategoryBtn category={category} color="#0052FF">
            {category}
          </CategoryBtn>
        </div>
        <p className="text-black font-bold text-md  md:text-xl">{title}</p>
        <p
          className={`text-sm font-semibold ${
            category === "Clothing"
              ? " text-clothing"
              : category === "Health"
              ? " text-health"
              : category === "Food"
              ? " text-food"
              : " text-education"
          }`}
        >
          ${price}.00
        </p>
        <div>
          <button
            onClick={() => navigate(`/${category}/${id}`)}
            className={`text-white py-1 lg:py-2 px-5 lg:px-8 rounded-lg text-sm lg:text-base ${
              category === "Clothing"
                ? " bg-clothing"
                : category === "Health"
                ? " bg-health"
                : category === "Food"
                ? " bg-food"
                : " bg-education"
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDonationCard;
