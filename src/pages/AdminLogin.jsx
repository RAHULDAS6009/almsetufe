import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../utils/api";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    const errors = {};
    if (!role) errors.role = "Select your role";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Logged in with:", { role, email, password });

      try {
        setMessage("Please wait...");
        const response = await axios.post(`${API}/admin/login`, {
          role,
          email,
          password,
        });

        setMessage("");
        if (response.data.data.role == "admin") {
          navigate("/admin/dashboard");
        } else if (response.data.data.role == "superadmin") {
          navigate("/superadmin/dashboard");
        }
      } catch (error) {
        setMessage(error.response.data.message);
        console.log(error);
      }
      // Handle login here
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
              Sign in to your account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-900"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.role ? "border-red-500" : ""
                  }`}
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                </select>
                {errors.role && (
                  <p className="mt-2 text-sm text-red-600">{errors.role}</p>
                )}
              </div>

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
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {message && <p className="text-red-500 text-center">{message}</p>}
              <div>

              <Link
                  to="/login"
                  className="text-blue-500 hover:underline"
                  >
                  Login as user
                </Link>
                  </div>
              <button
                onClick={() => {
                  setRole("Admin")
                  setEmail("one@gmail.com");
                  setPassword("123456");
                }}
                className="bg-slate-500 rounded-lg py-2 px-2 text-white w-full"
              >
                Get guest credentials
              </button>
              <button
                type="submit"
                className="w-full px-5 py-2.5 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm font-medium"
              >
                Sign In
              </button>

              <div className="flex w-full justify-between text-sm font-medium text-gray-900">
                <Link
                  to="/forgot-password"
                  className="text-blue-500 hover:underline"
                >
                  Forgot your password?
                </Link>

                <Link
                  to="/admin/register"
                  className="text-blue-500 hover:underline"
                >
                  Register as admin?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
