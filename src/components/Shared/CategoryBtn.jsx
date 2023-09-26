import React from "react";

// ${
//   category === "Clothing"
//     ? "bg-clothing/[.20] text-clothing"
//     : category === "Health"
//     ? "bg-health/[.20] text-health"
//     : category === "Food"
//     ? "bg-food/[.20] text-food"
//     : "bg-education/[.20] text-education"
// }

const CategoryBtn = ({ children, category_bg, text_bg }) => {
  return (
    <button
      type="button"
      className={`font-medium py-1 px-2 text-sm rounded-md ${category_bg} ${text_bg}
      `}
    >
      {children}
    </button>
  );
};

export default CategoryBtn;
