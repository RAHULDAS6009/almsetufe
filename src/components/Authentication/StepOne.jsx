import React, { useState } from "react";
import ShowButton from "../../assets/eyeButton.svg";
import HideButton from "../../assets/hideEyeButton.svg";

const StepOne = ({ formData, handleChange, handleCheckboxChange, errors }) => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          id="name"
          className={`bg-gray-50 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder="John"
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          id="email"
          className={`bg-gray-50 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder={`${
            formData.isCollegeEmail ? "....@x.edu.in" : "....@gmail.com"
          } `}
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <div className="flex gap-2 items-center mt-2">
          <input
            type="checkbox"
            checked={formData.isCollegeEmail}
            id="college-email"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="college-email" className="text-sm text-gray-900">
            This is a college email
          </label>
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          name="password"
          type={`${show ? "text" : "password"}`}
          onChange={handleChange}
          value={formData.password}
          id="password"
          placeholder="••••••••"
          className={`bg-gray-50  border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        />
        <div
          onClick={handleClick}
          className="cursor-pointer absolute right-2 top-10"
        >
          {show ? (
            <img width={20} height={20} src={HideButton} />
          ) : (
            <img width={20} height={20} src={ShowButton} />
          )}
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          id="phone"
          placeholder="+91-123-456-7890"
          className={`bg-gray-50 border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
    </>
  );
};

export default StepOne;
