import React from "react";

const StepFive = ({ formData }) => {
  return (
    <div className="space-y-4 h-[300px]   overflow-y-auto" > 
      <h2 className="text-xl font-semibold text-gray-900">Review Your Details</h2>
      <p className="text-sm text-gray-600">Please review the details below and confirm.</p>

      {/* Personal Information */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone Number:</strong> {formData.phone}</p>
      </div>

      {/* Academic Information */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Academic Information</h3>
        <p><strong>Role:</strong> {formData.role}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>College:</strong> {formData.college}</p>
        <p><strong>Enrollment Number:</strong> {formData.enrollmentNumber}</p>
        <p><strong> Year of Graduation:</strong> {formData.yearOfGraduation}</p>
        <p><strong>Branch:</strong> {formData.branch}</p>

      </div>

      {/* Profile Information */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Information</h3>
        <p><strong>Bio:</strong> {formData.bio}</p>
        {formData.profilePic && (
          <div className="mt-2">
            <strong>Profile Picture:</strong>
            <img
              src={URL.createObjectURL(formData.profilePic)}
              alt="Profile Preview"
              className="mt-2 w-24 h-24 rounded-full border object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepFive;
