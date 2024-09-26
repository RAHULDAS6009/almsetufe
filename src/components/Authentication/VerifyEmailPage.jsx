import React from "react";

const VerifyEmail = ({ formData,sentEmail}) => {
  
  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Verify Your College Email</h1>
        
        <div>
          <p className="text-sm text-gray-600">{sentEmail ? "A verification email has been sent to:":""}</p>
          <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mt-2">
            {formData.email}
          </div>
        </div>
        
        

        <div className="text-sm text-gray-600 mt-4">
          Didn't receive the email?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
