import React, { useState } from "react";
import ViewIcon from "../assets/viewDocument.svg";
import Document from "../components/DocumentModal";

const TableRow = ({ name, role, profilePic, title, onApprove, onReject,document }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDocumentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="w-full border-2 border-slate-900 rounded-3xl flex justify-between items-center px-2 py-2 my-2">
      <div className="flex justify-items-start items-center gap-2">
        <img className="w-10 h-10 rounded-full" src={profilePic} alt="ppic" />
        <div className="flex items-baseline gap-2 text-md font-normal">

        {name} ,
        <div className="font-semibold text-sm">
          {role[0].toUpperCase() + role.slice(1)}
        </div>
        </div>
      </div>
      {title === "Pending Approval" ? (
        <div className="flex gap-5 items-center">
          <div
            onClick={handleViewDocumentClick}
            className="rounded-2xl border-2 border-slate-700/30 text-sm px-4 py-2 flex gap-2 items-center cursor-pointer hover:bg-slate-500/30 font-medium"
          >
            View Document
            <img src={ViewIcon} className="w-4 h-4" alt="view Document" />
          </div>
          <div
            className="rounded-2xl border-2 bg-green-600 text-white px-4 py-2 font-medium cursor-pointer"
            onClick={onApprove} // Approve the user
          >
            Approve
          </div>
          <div
            className="rounded-2xl border-2 border-red-700 text-red-500 hover:bg-red-400 hover:text-white px-5 py-2 font-medium cursor-pointer"
            onClick={onReject} // Reject the user
          >
            Reject
          </div>
        </div>
      ) : (
        <div
          className="rounded-2xl border-2 border-red-700 text-red-500 hover:bg-red-400 hover:text-white px-5 py-2 font-medium cursor-pointer"
          onClick={onReject} // Delete the user
        >
          Delete
        </div>
      )}
      {isModalOpen && (
        <Document
          user={{ name, role, profilePic }}
          document={document}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TableRow;
