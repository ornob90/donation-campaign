import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryBtn from "../Shared/CategoryBtn";

const DonationCard = ({ donation }) => {
  const navigate = useNavigate();

  const { id, image, title, category, card_bg, text_bg, category_bg } =
    donation;

  // ${
  //   category === "Clothing"
  //     ? "bg-clothing/[.15]"
  //     : category === "Health"
  //     ? "bg-health/[.15]"
  //     : category === "Food"
  //     ? "bg-food/[.15]"
  //     : "bg-education/[.15]"
  // }

  // ${
  //   category === "Clothing"
  //     ? "text-clothing"
  //     : category === "Health"
  //     ? "text-health"
  //     : category === "Food"
  //     ? "text-food"
  //     : "text-education"
  // }
  return (
    <div
      onClick={() => navigate(`${category}/${id}`)}
      className={`${card_bg} rounded-b-lg active:scale-[1.1] duration-[.3s] transition-all ease-in-out hover:scale-[1.05]`}
    >
      <img src={image} className="h-[200px] w-full rounded-t-lg" />
      <div className="py-2 pl-2">
        <CategoryBtn category_bg={category_bg} text_bg={text_bg}>
          {category}
        </CategoryBtn>
        <h3 className={`${text_bg} font-[600] text-lg `}>{title}</h3>
      </div>
    </div>
  );
};

export default DonationCard;
