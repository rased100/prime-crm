import React from "react";

const CustomButton = ({ name, width }) => {
  return (
    <button
      type="button"
      style={{ width: width }}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[20px] px-8 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {name}
    </button>
  );
};

export default CustomButton;
