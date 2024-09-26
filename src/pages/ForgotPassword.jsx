import React, { useState } from "react";
import axios from "axios";
import { API } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
const generateRandomCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const CAPTCHA_CODE = generateRandomCode(); // Simulated CAPTCHA code for demonstration

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (captchaInput !== CAPTCHA_CODE) errors.captcha = "Invalid CAPTCHA code.";
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle password reset request here
      try {
        setMessage("Please wait...");
        const response = await axios.post(
          `${API}/users/send-password-reset-email`,
          { email }
        );
        setEmail("");
        setCaptchaInput("");
        setMessage(response.data.message);
        console.log(response.data.message);
        navigate("/login");
      } catch (error) {
        setMessage(error.response.data.message);
        console.log(error);
      }
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
              Forgot Password
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-gray-900"
                >
                  CAPTCHA
                </label>
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-200 p-2 rounded-lg">
                    {CAPTCHA_CODE}
                  </div>
                  <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.captcha ? "border-red-500" : ""
                    }`}
                    placeholder="Enter CAPTCHA"
                  />
                </div>
                {errors.captcha && (
                  <p className="mt-2 text-sm text-red-600">{errors.captcha}</p>
                )}
              </div>

              {message && (
                <p className="text-blue-500 text-center">{message}</p>
              )}

              <button
                type="submit"
                className="w-full px-5 py-2.5 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm font-medium"
              >
                Send Password Reset Link
              </button>

              <div className="text-sm font-medium text-gray-900">
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
