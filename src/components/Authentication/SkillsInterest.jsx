import React, { useState } from "react";

const skillsList = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "SQL",
  "Java",
  "C++",
  "Data Analysis",
];

const interestsList = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Web Development",
  "Machine Learning",
  "Blockchain",
  "Cloud Computing",
  "Game Development",
  "Data Science",
  "DevOps",
  "UI/UX Design",
];

const SkillsAndInterests = ({ formData, handleChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSkillClick = (skill) => {
    if (formData.skills.includes(skill)) {
      // Remove skill
      const updatedSkills = formData.skills.filter((s) => s !== skill);
      handleChange({ target: { name: "skills", value: updatedSkills } });
    } else if (formData.skills.length < 3) {
      // Add skill if less than 3 are selected
      const updatedSkills = [...formData.skills, skill];
      handleChange({ target: { name: "skills", value: updatedSkills } });
    }
  };

  const handleInterestClick = (interest) => {
    if (formData.interests.includes(interest)) {
      // Remove interest
      const updatedInterests = formData.interests.filter((i) => i !== interest);
      handleChange({ target: { name: "interests", value: updatedInterests } });
    } else if (formData.interests.length < 3) {
      // Add interest if less than 3 are selected
      const updatedInterests = [...formData.interests, interest];
      handleChange({ target: { name: "interests", value: updatedInterests } });
    }
  };

  const filteredSkills = skillsList.filter((skill) =>
    skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInterests = interestsList.filter((interest) =>
    interest.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <label
          htmlFor="search"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Search Skills and Interests
        </label>
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleSearchChange}
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Search..."
        />
      </div>
      {/* Skills section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Skills ({formData.skills.length}/3)
        </h2>
        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <button
              key={skill}
              onClick={(e) => {
                e.preventDefault();
                handleSkillClick(skill);
              }}
              className={`px-3 py-1 text-sm rounded-full border ${
                formData.skills.includes(skill)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
      {/* Interests section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Interests ({formData.interests.length}/3)
        </h2>
        <div className="flex flex-wrap gap-2">
          {filteredInterests.map((interest) => (
            <button
              key={interest}
              onClick={(e) => {
                e.preventDefault();
                handleInterestClick(interest);
              }}
              className={`px-3 py-1 text-sm rounded-full border ${
                formData.interests.includes(interest)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-green-400`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsAndInterests;
