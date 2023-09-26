import React from "react";
import CategoryBtn from "../Shared/CategoryBtn";
import { useNavigate } from "react-router-dom";

const MyDonationCard = ({ donation }) => {
  const navigate = useNavigate();
  const {
    id,
    image,
    title,
    category,
    price,
    card_bg,
    btn_bg,
    text_bg,
    category_bg,
  } = donation;
  return (
    <div key={id} className={`flex rounded-lg gap-2 ${card_bg}`}>
      <div className="w-[40%] md:w-[30%]">
        <img
          className="object-cover w-full h-full rounded-l-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 py-4 pr-1 lg:p-4">
        <div>
          <CategoryBtn category_bg={category_bg} text_bg={text_bg}>
            {category}
          </CategoryBtn>
        </div>
        <p className="font-bold text-black text-md md:text-xl">{title}</p>
        <p className={`text-sm font-semibold ${text_bg}`}>${price}.00</p>
        <div>
          <button
            onClick={() => navigate(`/${category}/${id}`)}
            className={`text-white py-1 lg:py-2 px-5 lg:px-8 rounded-lg text-sm lg:text-base ${btn_bg}`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDonationCard;
