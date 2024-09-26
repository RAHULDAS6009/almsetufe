import React from "react";

const StepFour = ({ formData, handleChange, handleFileChange, errors }) => {
  return (
    <>
      {/* Enrollment Number Field */}
      <div>
        <label
          htmlFor="enrollmentNumber"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Enrollment Number
        </label>
        <input
          type="number"
          name="enrollmentNumber"
          id="enrollmentNumber"
          onChange={handleChange}
          value={formData.enrollmentNumber}
          className={`bg-gray-50 border ${
            errors.enrollmentNumber ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        />
        {errors.enrollmentNumber && (
          <p className="text-sm text-red-500 mt-1">{errors.enrollmentNumber}</p>
        )}
      </div>

      {/* Profile Picture Upload */}
      <div className="mt-4">
        <label
          htmlFor="profilePic"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Profile Picture
        </label>
        <input
          type="file"
          name="profilePic"
          id="profilePic"
          onChange={handleFileChange}
          className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 file:text-gray-700 file:cursor-pointer ${
            errors.profilePic ? "border-red-500" : "border-gray-300"
          } focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.profilePic && (
          <p className="mt-2 text-sm text-red-500">{errors.profilePic}</p>
        )}
      </div>
    </>
  );
};

export default StepFour;
