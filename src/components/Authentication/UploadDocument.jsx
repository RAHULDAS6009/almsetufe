import React, { useState } from "react";

const UploadCollegeDocument = ({ handleFileChange, formData }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Upload College Document
        </h1>

        <div>
          <p className="text-sm text-gray-600">
            Please upload your college document or unique ID to verify your
            student status.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 mt-2">
          <input
            type="file"
            name="document"
            checked={formData.isCollegeEmail}
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 file:text-gray-700 file:cursor-pointer focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="text-sm text-gray-600 mt-4">
          Need help?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default UploadCollegeDocument;
