import React from "react";

const CategoryBtn = ({ children, color }) => {
  return (
    <button
      type="button"
      className={`bg-[${color}]/[.20] text-[${color}] font-medium py-1 px-2 text-sm rounded-md`}
    >
      {children}
    </button>
  );
};

export default CategoryBtn;
