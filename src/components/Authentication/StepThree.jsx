import React, { useState, useEffect, useRef } from "react";

const universities = [
  "Ch. Maloo Ram Bhambhu Govt. Poly. College",
  "Govt. Polytechnic College",
  "Govt. Women Polytechnic College",
  "Laxmidhar Polytechnic College",
  "Indraprastha Institute of Polytechnic",
  "Shree Shyochand Memorial Institute of Engineering and Technology",
  "Yaduvanshi Polytechnic",
];

const getCurrentYear = () => new Date().getFullYear() + 4;

const StepThree = ({ formData, handleChange, errors }) => {
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [inputValue, setInputValue] = useState(formData.college);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (
      highlightedIndex >= 0 &&
      highlightedIndex < filteredUniversities.length
    ) {
      dropdownRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex, filteredUniversities]);

  const handleCollegeChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setHighlightedIndex(-1);
    if (value) {
      setFilteredUniversities(
        universities.filter((uni) =>
          uni.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredUniversities([]);
    }
  };

  const handleCollegeSelect = (value) => {
    setInputValue(value);
    setFilteredUniversities([]);
    setHighlightedIndex(-1);
    handleChange({ target: { name: "college", value } });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredUniversities.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (
        highlightedIndex >= 0 &&
        highlightedIndex < filteredUniversities.length
      ) {
        handleCollegeSelect(filteredUniversities[highlightedIndex]);
      }
    }
  };

  return (
    <>
      <div>
        <label
          htmlFor="college"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          College
        </label>
        <input
          type="text"
          name="college"
          onChange={handleCollegeChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          id="college"
          className={`bg-gray-50 border ${
            errors.college ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder="Type to search..."
          required
        />
        {errors.college && (
          <p className="text-red-500 text-sm">{errors.college}</p>
        )}
        {inputValue && filteredUniversities.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-lg bg-white absolute z-10">
            {filteredUniversities.map((uni, index) => (
              <li
                key={uni}
                ref={highlightedIndex === index ? dropdownRef : null}
                className={`p-2 cursor-pointer ${
                  highlightedIndex === index ? "bg-gray-300" : ""
                }`}
                onClick={() => handleCollegeSelect(uni)}
              >
                {uni}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <label
          htmlFor="branch"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Branch
        </label>
        <select
          name="branch"
          onChange={handleChange}
          value={formData.branch}
          id="branch"
          className={`bg-gray-50 border ${
            errors.branch ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        >
          <option value="" disabled>
            Select your branch
          </option>
          <option value="ECE">ECE</option>
          <option value="CSE">CSE</option>
          <option value="ME">ME</option>
          <option value="Biotech">Biotech</option>
        </select>
        {errors.branch && (
          <p className="text-red-500 text-sm">{errors.branch}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="specialization"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Specialization
        </label>
        <select
          name="specialization"
          onChange={handleChange}
          value={formData.specialization}
          id="specialization"
          className={`bg-gray-50 border ${
            errors.specialization ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        >
          <option value="" disabled>
            Select your specialization
          </option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
          <option value="Robotics">Robotics</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Biomedical Engineering">Biomedical Engineering</option>
        </select>
        {errors.specialization && (
          <p className="text-red-500 text-sm">{errors.specialization}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="yearOfGraduation"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Year of Graduation
        </label>
        <select
          name="yearOfGraduation"
          onChange={handleChange}
          value={formData.yearOfGraduation}
          id="yearOfGraduation"
          className={`bg-gray-50 border ${
            errors.yearOfGraduation ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          required
        >
          <option value="" disabled>
            Select your graduation year
          </option>
          {Array.from(
            { length: getCurrentYear() - 1980 + 1 },
            (_, i) => getCurrentYear() - i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {errors.yearOfGraduation && (
          <p className="text-red-500 text-sm">{errors.yearOfGraduation}</p>
        )}
      </div>
    </>
  );
};

export default StepThree;
