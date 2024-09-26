import React from "react";

const Tab = ({ label, isActive }) => {
  // Accept isActive prop
  return (
    <div
      className={`rounded-2xl px-4 py-2 h-12 w-64 cursor-pointer ${
        isActive ? "bg-[#111E4B] text-white" : "bg-[#BBDCF1] text-black"
      } hover:bg-[#111e4bca] hover:text-white`}
    >
      <div className="flex justify-center items-center text-2xl">{label}</div>
    </div>
  );
};

export default Tab;
