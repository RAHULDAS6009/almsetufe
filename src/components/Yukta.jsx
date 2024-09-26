import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

// Building the theme for the chat
const { theme, style } = buildTheme({
  themeName: "Midnight",
  themeColor: "#7fffd4",
});

// Add your Client ID here ⬇️
const clientId = "df3edf74-90c2-46e5-a0b0-36efe80bd2bd";


const Yukta = () => {
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
    botAvatar: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png", // Example avatar image
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
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <style>{style}</style>
        <WebchatProvider theme={theme} configuration={config} client={client}>
          {/* Customized floating action button */}
          <Fab
            onClick={toggleWebchat}
            bpFabIcon={
              <img
                src="https://icon-library.com/images/chat-icon-png/chat-icon-png-29.jpg" // Example custom chat icon image
                alt="Chat Icon"
                style={{ width: "100%", height: "100%" }}
              />
            }
            style={{
              position: "fixed",
              bottom: "25px",
              right: "30px",
              zIndex: 1001,
              // backgroundColor: "#634433",
              color: "#7fffd4",
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
              right: "20px",
              width: "350px",
              height: "450px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 1000,
              backgroundColor: "#fff", // Background color for chat
            }}
          >
            <Webchat />
          </div>
        </WebchatProvider>

    </div>
  )
}

export default Yukta