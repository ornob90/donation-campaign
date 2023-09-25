import React from "react";

const CategoryBtn = ({ children, category }) => {
  return (
    <button
      type="button"
      className={`font-medium py-1 px-2 text-sm rounded-md
      ${
        category === "Clothing"
          ? "bg-clothing/[.20] text-clothing"
          : category === "Health"
          ? "bg-health/[.20] text-health"
          : category === "Food"
          ? "bg-food/[.20] text-food"
          : "bg-education/[.20] text-education"
      }`}
    >
      {children}
    </button>
  );
};

export default CategoryBtn;
