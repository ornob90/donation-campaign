import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryBtn from "../Shared/CategoryBtn";

const DonationCard = ({ donation }) => {
  const navigate = useNavigate();

  const { id, image, title, category } = donation;

  return (
    <div
      onClick={() => navigate(`${category}/${id}`)}
      className={`${
        category === "Clothing"
          ? "bg-clothing/[.15]"
          : category === "Health"
          ? "bg-health/[.15]"
          : category === "Food"
          ? "bg-food/[.15]"
          : "bg-education/[.15]"
      }  rounded-b-lg active:scale-[1.1] duration-[.3s] transition-all ease-in-out hover:scale-[1.05]`}
    >
      <img src={image} className="h-[200px] w-full rounded-t-lg" />
      <div className="pl-2 py-2">
        <CategoryBtn category={category}>{category}</CategoryBtn>
        <h3
          className={`font-[600] text-lg ${
            category === "Clothing"
              ? "text-clothing"
              : category === "Health"
              ? "text-health"
              : category === "Food"
              ? "text-food"
              : "text-education"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default DonationCard;
