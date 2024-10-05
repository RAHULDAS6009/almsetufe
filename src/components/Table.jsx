import React from "react";
import SearchIcon from "../assets/searchIcon.svg";
import SortIcon from "../assets/sortIcon.svg";
import TableRow from "./TableRow";

const Table = ({ title, users, onApprove, onReject, message }) => {
  return (
    <div className="mt-5 px-4 lg:px-10 border-2 border-black rounded-2xl h-[480px] 2xl:h-[700px] relative">
      <FilterAndSearch />
      <div className="mt-20 overflow-y-auto max-h-[calc(100vh-150px)] lg:max-h-screen scrollbar-custom pr-2">
        {message && <p className="text-blue-500 text-center">{message}</p>}
        {users.map((user, index) => (
          <TableRow
            key={index}
            name={user.name}
            role={user.role}
            profilePic={user.profilePic}
            title={title}
            document={user.document}
            onApprove={() => onApprove(user._id)}
            onReject={() => onReject(user._id)}
          />
        ))}
      </div>
    </div>
  );
};

function FilterAndSearch() {
  return (
    <div className="flex items-center justify-start absolute top-0 w-full mt-5 space-x-2 px-2 lg:px-0">
  {/* Container for Search Input and Icon */}
  <div className="relative w-2/5 md:w-1/3">
    <input
      type="text"
      placeholder="Search.."
      className="w-full bg-white text-slate-400 text-sm py-2 pr-10 px-2 border-2 border-slate-700/30 shadow-md rounded-2xl focus:outline-none"
    />
    {/* Search Icon positioned inside the input */}
    <img
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 p-1"
      src={SearchIcon}
      alt="searchIcon"
    />
  </div>
  
  {/* Sort & Filter Button */}
  <div  className=" gap-5 flex items-center justify-between font-medium shadow-md border-2 bg-white border-slate-700/30 text-sm py-1 px-2 rounded-2xl">
    <span>Sort & Filter</span>
    <img
      className="cursor-pointer w-6 h-6 md:w-8 md:h-8 p-1 bg-[#d1e6f3] rounded-lg hover:bg-[#c4e1f3] "
      src={SortIcon}
      alt="Sort Icon"
    />
  </div>
</div>

  );
}

export default Table;
