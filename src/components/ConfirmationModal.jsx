import React from "react";

const ConfirmationModal = ({ action, onConfirm, onCancel }) => {
  const getActionText = () => {
    switch (action) {
      case 'approve':
        return "approve";
      case 'reject':
        return "reject";
      case 'delete':
        return "delete";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Confirm {getActionText()}</h3>
        <p>Are you sure you want to {getActionText()} this user?</p>
        <div className="flex gap-4 mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
