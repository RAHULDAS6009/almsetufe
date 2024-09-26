import React from "react";

const DocumentModal = ({ user, onClose, document }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="border-b pb-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Document for {user.name}
          </h3>
          <p className="text-sm text-gray-500">Review the details carefully</p>
        </div>

        {/* User Information */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            className="w-20 h-20 rounded-full border border-gray-300"
            src={user.profilePic}
            alt="Profile"
          />
          <div>
            <p className="text-gray-700 text-lg font-medium">{user.name}</p>
            <p className="text-gray-500">
              {user.role[0].toUpperCase() + user.role.slice(1)}
            </p>
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-hidden">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Document</h4>
          <div className="text-gray-700 flex justify-center">
            <img
              className="max-w-full h-auto rounded-md shadow-sm"
              src={document}
              alt="User Document"
            />
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;
