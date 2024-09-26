import React, { useState } from "react";
import StepOne from "../components/Authentication/StepOne";
import StepTwo from "../components/Authentication/StepTwo";
import StepThree from "../components/Authentication/StepThree";
import StepFour from "../components/Authentication/StepFour";
import SkillsAndInterests from "../components/Authentication/SkillsInterest";
import StepFive from "../components/Authentication/StepFive";
import VerifyCollegeEmail from "../components/Authentication/VerifyEmailPage";
import UploadCollegeDocument from "../components/Authentication/UploadDocument";
import axios from "axios";
import { API } from "../utils/api";
import { Link } from "react-router-dom";

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    college: "",
    isCollegeEmail: false,
    city: "",
    bio: "",
    branch: "",
    specialization: "",
    yearOfGraduation: "",
    skills: [],
    interests: [],
    enrollmentNumber: "",
    profilePic: null,
    document: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the specific field
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, isCollegeEmail: e.target.checked });
  };

  const collegeEmailPattern = /^[\w-.]+@[a-zA-Z0-9.-]+\.edu\.in$/;
  const normalEmailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateStep = () => {
    const stepErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.name) stepErrors.name = "Name is required.";

        if (!formData.email) {
          stepErrors.email = "Email is required.";
        } else if (!normalEmailPattern.test(formData.email)) {
          stepErrors.email = "Invalid email format.";
        } else if (
          formData.isCollegeEmail &&
          !collegeEmailPattern.test(formData.email)
        ) {
          stepErrors.email =
            "Email must be a college email (e.g., name@college.edu.in).";
        } else if (
          collegeEmailPattern.test(formData.email) &&
          !formData.isCollegeEmail
        ) {
          stepErrors.email =
            "This is a college email type. Please tick the checkbox below.";
        }

        if (!formData.password || formData.password.length < 6) {
          stepErrors.password = formData.password
            ? "Password must be at least six characters."
            : "Password is required.";
        }

        if (!formData.phone) stepErrors.phone = "Phone number is required.";
        break;

      case 2:
        if (!formData.role) stepErrors.role = "Role is required.";
        if (!formData.city) stepErrors.city = "City is required.";
        if (!formData.bio) stepErrors.bio = "Bio is required.";
        break;

      case 3:
        if (!formData.college) stepErrors.college = "College is required.";
        if (!formData.branch) stepErrors.branch = "Branch is required.";
        if (!formData.yearOfGraduation)
          stepErrors.yearOfGraduation = "Year of graduation is required.";
        if (!formData.specialization)
          stepErrors.specialization = "Specialization is required.";
        break;

      case 4:
        if (!formData.enrollmentNumber)
          stepErrors.enrollmentNumber = "Enrollment number is required.";
        if (!formData.profilePic)
          stepErrors.profilePic = "Profile picture is required.";
        break;

      case 5:
        if (!formData.skills.length)
          stepErrors.skills = "At least one skill is required.";
        if (!formData.interests.length)
          stepErrors.interests = "At least one interest is required.";
        break;

      default:
        break;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = async () => {
    if (currentStep === 1) {
      const { email, phone } = formData;
      try {
        await axios.post(`${API}/users/check-email-or-phone`, {
          email,
          phone,
        });
        setMessage("");
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
        return;
      }
    } else if (currentStep === 4) {
      const { enrollmentNumber } = formData;
      try {
        await axios.post(`${API}/users/check-enrollment`, {
          enrollmentNumber,
        });
        setMessage("");
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
        return;
      }
    }
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 7));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Data Submitted: ", formData);
      try {
        setMessage("Please wait...");
        const response = await axios.post(`${API}/users/register`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setMessage(response.data.message);
        console.log(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
        console.log(error);
      }
    }
  };

  const checkEmailPhone = async (email, phone) => {
    try {
      const response = await axios.post(`${API}/users/check-email-or-phone`, {
        email,
        phone,
      });
      setMessage("");
      console.log(response.data.message);
      return false;
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      return true;
    }
  };

  const checkEnrollment = async (enrollmentNumber) => {
    try {
      const response = await axios.post(`${API}/users/check-enrollment`, {
        enrollmentNumber,
      });
      setMessage("");
      console.log(response.data.message);
      return false;
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            errors={errors}
          />
        );
      case 5:
        return (
          <SkillsAndInterests
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 6:
        return (
          <StepFive
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        );
      case 7:
        return formData.isCollegeEmail ? (
          <VerifyCollegeEmail formData={formData} errors={errors} />
        ) : (
          <UploadCollegeDocument
            formData={formData}
            handleFileChange={handleFileChange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://cdn-icons-png.flaticon.com/128/999/999663.png"
            alt="logo"
          />
          AlmaSetu
        </a>

        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {renderStep()}
              {message && (
                <p className="text-blue-500 text-center">{message}</p>
              )}
              <div className="flex justify-between mt-4 items-center">
                
                {currentStep > 1 && currentStep !== 7 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 6 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Next
                  </button>
                )}
                {currentStep === 1 && (
                  <>
                  <div className="text-sm">

                  Already have an account?{" "}
                    <Link className="text-sm text-blue-400" to={"/login"}>
                   Sign in
                    </Link>
                  </div>
                  </>
                ) }
                {currentStep === 6 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Next
                  </button>
                )}
                {currentStep === 7 && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={` w-full px-5 py-2.5 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm font-medium `}
                  >
                    Verify and Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
