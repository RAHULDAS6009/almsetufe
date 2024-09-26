import  {  useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopEvents } from "../components/TopEvents";
import { Posts } from "../components/Posts";
import { MyProfile } from "../components/MyProfile";
import { Connections } from "../components/Connections";
import { Communities } from "../components/Communities";
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
// import axios from "axios";
// import { API } from "../utils/api";

// Building the theme for the chat
const { theme, style } = buildTheme({
  themeName: "Midnight",
  themeColor: "#0F1035",
});

// Add your Client ID here ⬇️
const clientId = "df3edf74-90c2-46e5-a0b0-36efe80bd2bd";

// eslint-disable-next-line react/prop-types
export const Home = ({ loggedInUser }) => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  // Toggles the visibility of the chatbot
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  // Configuration object for the chatbot
  const config = {
    composerPlaceholder: "Type a message...",
    botName: "YUKTA",
    botAvatar: "https://picsum.photos/200/300", // Example avatar image
    botDescription: "",
    email: {
      title: "randomEmail@boptress.com",
      link: "mailto:randomEmail@boptress.com",
    },
    phone: {
      title: "555-555-5555",
      link: "tel:555-555-5555",
    },
    website: {
      title: "Botpress",
      link: "https://botpress.com",
    },
    termsOfService: {
      title: "Terms of Service",
      link: "https://botpress.com/terms",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      link: "https://botpress.com/privacy",
    },
  };

  return (
    <div className="grid grid-cols-10   relative  bg-[#ECF7FE] ">
      <style>{style}</style>
      <WebchatProvider theme={theme} configuration={config} client={client}>
        {/* Customized floating action button */}
        <Fab
          onClick={toggleWebchat}
          bpFabIcon={
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgobl4AGKjs2EN-QvNkXW2TWmhiE-QM9bhPA&s" // Example custom chat icon image
              alt="Chat Icon"
              style={{ width: "100%", height: "100%", color: "#ECF7FE" }}
            />
          }
          style={{
            position: "fixed",
            bottom: "20px",
            right: "30px",
            zIndex: 1001,
            backgroundColor: "#0F1035",
            color: "#0F1035",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          }}
        />

        {/* Chat window configured as a pop-up */}
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
            position: "fixed",
            bottom: "90px", // Space above the floating button
            right: "30px",
            width: "350px",
            height: "450px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            zIndex: 1000,
            backgroundColor: "", // Background color for chat
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>

      {/* Left Sidebar */}
      <div className="col-span-2 p-5 h-screen px-5 pt-5">
        <MyProfile user={loggedInUser} />
      </div>

      {/* Main Content Area */}

      <div className="col-span-8 grid grid-cols-8 px-5 overflow-y-auto">
        <div className="  h-screen col-span-6 grid grid-rows-[repeat(12,minmax(0,1fr))]  ">
          <div className="row-span-1 p-2 xl:pt-5 ">
            {/* <SearchBar showProfile={false} showSearch={true} /> */}
          </div>
          <div className="row-span-3 xl:row-span-4 p-2 scrollbar-custom overflow-x-auto overflow-y-hidden pt-5 2xl:pt-10   ">
            {/* <TopEvents /> */}
          </div>
          <div className="row-span-7 xl:row-span-6  p-2 pt-5">
            {/* <Posts /> */}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className=" h-full col-span-2 flex  flex-col   fixed right-0 top-0 pr-2 2xl:pr-5 ">
          <div className="row-span-3 w-full  p-2  ">
            {/* <Connections /> */}
          </div>
          <div className="row-span-5    p-2 ">
            {/* <Communities /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
