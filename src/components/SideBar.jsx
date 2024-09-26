import { Link, useNavigate } from "react-router-dom";
import cross from "../assets/Cross.svg";
import bars from "../assets/bar.svg";
import { useState } from "react";
import { sideLinks, userSideLinks } from "../assets/Constant.js";
import logout from "../assets/logout.svg";
import axios from "axios";
import { API } from "../utils/api.js";

export default function SideBar({ user }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${API}/users/logout`);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Overlay for sidebar */}
      {/* Sidebar */}
      <div>
        {/* Toggle button for collapsed sidebar */}
        {isCollapsed ? (
          <img
            src={bars}
            alt="Expand Sidebar"
            className={`w-10 h-10 absolute top-4 pt-2 ${
              user ? "left-6" : "left-2"
            } z-50 cursor-pointer rounded-2xl ${
              user ? "" : "hover:bg-slate-200"
            } transition-transform duration-300 ease-in-out`}
            width={30}
            height={30}
            onClick={() => setIsCollapsed(false)}
          />
        ) : (
          // Full sidebar when expanded
          <div
            className={`bg-[#BBDCF1] fixed z-50 border-2 border-black top-0 left-0 h-screen flex-shrink-0 transition-transform duration-300 ease-in-out ${
              isCollapsed ? "-translate-x-full" : "translate-x-0"
            } w-64 overflow-hidden rounded-r-2xl`}
          >
            {/* Collapse button */}

            <div className="relative w-full flex flex-col h-full justify-center">
              <img
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setIsCollapsed(true)} // Set to collapse on click
                src={cross}
                alt="Collapse Sidebar"
                width={30}
                height={30}
              />
              <div className="flex flex-col w-11/12 gap-10 items-start px-4">
                {user
                  ? userSideLinks.map((nav, index) => (
                      <NavigateButton
                        user={true}
                        key={index}
                        icon={nav.icon}
                        isCollapsed={isCollapsed}
                        title={nav.title[0].toUpperCase() + nav.title.slice(1)}
                      />
                    ))
                  : sideLinks.map((nav, index) => (
                      <NavigateButton
                        key={index}
                        isCollapsed={isCollapsed}
                        title={nav.title[0].toUpperCase() + nav.title.slice(1)}
                      />
                    ))}
              </div>
              <img
                className="absolute cursor-pointer right-5 bottom-3"
                title="Logout"
                onClick={handleLogout}
                src={logout}
                width={25}
                height={25}
                alt="Logout"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavigateButton({ title, icon, isCollapsed, user }) {
  return (
    <div className="flex pl-2 items-center gap-2 border-2 border-black hover:border-white text-center w-full hover:bg-[#111E4B] bg-[#ECF7FE] rounded-3xl p-2 text-black hover:text-white">
      <img className="icon" src={icon} alt="" width={20} height={20} />
      {!isCollapsed && (
        <Link
          className="flex-1 text-left text-xl font-medium"
          to={`/${user ? "users" : "admin"}/${
            title[0].toLowerCase() + title.slice(1)
          }`}
        >
          {title}
        </Link>
      )}
    </div>
  );
}
