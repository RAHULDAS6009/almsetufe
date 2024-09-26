import React, { useState, useEffect, useRef } from "react";

const cities = [
  "Sriganganagar",
  "Tonk",
  "Udaipur",
  "Ajmer",
  "Bharatpur",
  "Alwar",
  "Balotra",
  "Churu",
  "Jhunjhunu",
  "Bundi",
];

const StepTwo = ({ formData, handleChange, errors }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [inputCity, setInputCity] = useState(formData.city);
  const [highlightedCityIndex, setHighlightedCityIndex] = useState(-1);
  const cityDropdownRef = useRef(null);

  useEffect(() => {
    if (
      highlightedCityIndex >= 0 &&
      highlightedCityIndex < filteredCities.length
    ) {
      cityDropdownRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedCityIndex, filteredCities]);

  const handleCityChange = (e) => {
    const value = e.target.value;
    setInputCity(value);
    setHighlightedCityIndex(-1);
    if (value) {
      setFilteredCities(
        cities.filter((city) =>
          city.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (value) => {
    setInputCity(value);
    setFilteredCities([]);
    setHighlightedCityIndex(-1);
    handleChange({ target: { name: "city", value } });
  };

  const handleCityKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedCityIndex((prev) =>
        Math.min(prev + 1, filteredCities.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedCityIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedCityIndex >= 0 && highlightedCityIndex < filteredCities.length) {
        handleCitySelect(filteredCities[highlightedCityIndex]);
      }
    }
  };

  return (
    <>
      <div>
        <label
          htmlFor="role"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Role
        </label>
        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          id="role"
          className={`bg-gray-50 border ${
            errors.role ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="Student">Student</option>
          <option value="Alumni">Alumni</option>
        </select>
        {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
      </div>
      <div className="relative">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          City
        </label>
        <input
          type="text"
          name="city"
          onChange={handleCityChange}
          onKeyDown={handleCityKeyDown}
          value={inputCity}
          id="city"
          className={`bg-gray-50 border ${
            errors.city ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder="Type to search..."
          required
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        {inputCity && filteredCities.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-lg bg-white absolute z-10 w-full">
            {filteredCities.map((city, index) => (
              <li
                key={city}
                ref={highlightedCityIndex === index ? cityDropdownRef : null}
                className={`p-2 cursor-pointer ${
                  highlightedCityIndex === index ? "bg-gray-300" : ""
                }`}
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Bio
        </label>
        <textarea
          name="bio"
          onChange={handleChange}
          value={formData.bio}
          id="bio"
          rows="4"
          className={`bg-gray-50 border ${
            errors.bio ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder="Tell us about yourself..."
          required
        />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio}</p>}
      </div>
    </>
  );
};

export default StepTwo;
