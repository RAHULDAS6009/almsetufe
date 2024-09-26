import { Route, Routes, useNavigate } from "react-router-dom";
import { MultiStepForm } from "./pages/MultiStepForm";
import Home from "./pages/Home";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import { SearchBar } from "./components/SearchBar";
import SideBar from "./components/SideBar";
import NotFound from "./components/NotFound";
import ResetPasswordPage from "./pages/ResetPassword";
import VerificationPage from "./pages/VerifiedPage";
import AdminLogin from "./pages/AdminLogin";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import SuperAdmin from "./pages/SuperAdmin";
import Profile from "./pages/Profile";
import AdminRegister from "./pages/AdminRegister";
import PanelDiscussion from "./pages/PanelDiscussion";
import LandingPage from "./pages/LandingPage";
import { useState, useLayoutEffect } from "react";
import axios from "axios";
import { API } from "./utils/api";
import ChatPage from "./pages/ChatPage";
import ConnectionsPage from "./pages/ConnectionsPage";
import UserProfile from "./pages/UserProfile";
import MentorShip from "./pages/MentorShip";

function AdminLayout() {
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API}/admin/current`);
        setLoggedInAdmin(response.data.data);
      } catch (error) {
        navigate("/admin/login");
        console.log(error);
      }
    })();
  }, [navigate]);

  return (
    <div className="flex bg-[#ECF7FE] w-full h-screen">
      <SideBar />
      <div className="w-full p-2 px-10">
        <SearchBar showProfile={true} showSearch={false} dropDown={false} />
        <Routes>
          <Route
            path="/dashboard"
            element={<AdminDashboard loggedInAdmin={loggedInAdmin} />}
          />
        </Routes>
      </div>
    </div>
  );
}

function UserLayout() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API}/users/current`);
        setLoggedInUser(response.data.data);
      } catch (error) {
        navigate("/login");
        console.log(error);
      }
    })();
  }, [navigate]);

  return (
    <main className="bg-[#ECF7FE] relative">
      <div className="flex">
        <SideBar user={true} />
        <div className="flex min-h-screen flex-1 ">
          <div className="w-full">
            {/* Adjust the left margin to match sidebar width */}
            <Routes>
              <Route
                path="/home"
                element={<Home loggedInUser={loggedInUser} />}
              />
              <Route
                path="/:userId/reset-password/:token"
                element={<ResetPasswordPage />}
              />
              <Route
                path="/:userId/verify-email/:token"
                element={<VerificationPage />}
              />
              <Route
                path="/events"
                element={<Events loggedInUser={loggedInUser} />}
              />
              <Route
                path="/events/:eventid"
                element={<EventDetails loggedInUser={loggedInUser} />}
              />
              <Route path="/u/:userId" element={<UserProfile />} />
              <Route
                path="/profile"
                element={<Profile loggedInUser={loggedInUser} />}
              />
              <Route
                path="/panel"
                element={<PanelDiscussion loggedInUser={loggedInUser} />}
              />
              <Route
                path="/chats"
                element={<ChatPage loggedInUser={loggedInUser} />}
              />
              <Route
                path="/connections"
                element={<ConnectionsPage loggedInUser={loggedInUser} />}
              />
              <Route
                path="/panel"
                element={<PanelDiscussion loggedInUser={loggedInUser} />}
              />
              <Route
                path="/chats"
                element={<ChatPage loggedInUser={loggedInUser} />}
              />
                  {/* <Route
                path="/connections"
                element={<ConnectionsPage loggedInUser={loggedInUser} />}
              /> */}
              <Route
                path="/mentorship/:mentorshipId"
                element={<MentorShip loggedInUser={loggedInUser} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/users/*" element={<UserLayout />} />
      <Route path="/register" element={<MultiStepForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/superadmin/dashboard" element={<SuperAdmin />} />
    </Routes>
  );
}

export default App;
