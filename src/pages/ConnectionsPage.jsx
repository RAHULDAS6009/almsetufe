import { users } from "../assets/Constant";
import TabsSection from "../components/TabsSection";
import GreaterIcon from "../assets/chevright.svg";
import SmallerIcon from "../assets/chevleft.svg";
import { useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import { API } from "../utils/api";

const ConnectionsPage = ({ loggedInUser }) => {
  const scrollConatinerRef = useRef();
  const [showMore, setShowMore] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  // Array to track the connection status for each user (initialize all to false)
  const [connectedUsers, setConnectedUsers] = useState(
    Array(users.length).fill(false)
  );

  const [userConnections, setUserConnections] = useState(null);
  const [pendingApprovals, setPendingApprovals] = useState(null);
  const [pendingRequests, setPendingRequests] = useState(null);

  useLayoutEffect(() => {
    const getConnections = async () => {
      try {
        // Fetch connections for the logged in user
        const response = await axios.get(`${API}/connections`);
        setUserConnections(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getConnections();
  }, [loggedInUser, isChanged]);

  useLayoutEffect(() => {
    const getPendingApprovals = async () => {
      try {
        const response = await axios.get(
          `${API}/connections/pending-approvals`
        );
        setPendingApprovals(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPendingApprovals();
  }, [loggedInUser, isChanged]);

  useLayoutEffect(() => {
    const getPendingRequests = async () => {
      try {
        const response = await axios.get(`${API}/connections/pending-requests`);
        setPendingRequests(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPendingRequests();
  }, [loggedInUser, isChanged]);

  function scrollInX() {
    if (scrollConatinerRef.current) {
      scrollConatinerRef.current.scrollBy({
        left: showMore ? -8 * 300 : 8 * 300,
        behavior: "smooth",
      });
    }

    setShowMore((prev) => !prev);
  }

  // Function to handle connect click for a specific user
  const handleConnectClick = (index) => {
    setConnectedUsers((prev) => {
      const updatedConnections = [...prev];
      console.log(updatedConnections);

      updatedConnections[index] = !updatedConnections[index]; // Toggle connection status for specific user
      return updatedConnections;
    });
  };

  return (
    <div className="fixed h-screen w-full">
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 h-[90%] w-[85%]">
          <div className="h-[60%] w-full rounded-2xl">
            <TabsSection
              userConnections={userConnections}
              setUserConnections={setUserConnections}
              pendingApprovals={pendingApprovals}
              setPendingApprovals={setPendingApprovals}
              pendingRequests={pendingRequests}
              setIsChanged={setIsChanged}
            />
          </div>
          <div className="h-[40%] w-full border rounded-2xl border-slate-700 px-4">
            <div className="flex flex-col justify-center h-full w-full">
              <p className="px-2 py-2 text-xl font-bold">
                Recommended Connections
              </p>
              <div className="relative h-3/4 flex items-center py-2">
                <div
                  ref={scrollConatinerRef}
                  className=" w-full h-full flex  items-center gap-5 overflow-x-hidden"
                >
                  {users.slice(0, 10).map((user, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white flex flex-col items-center justify-center gap-1 flex-none  w-[18%] h-full  rounded-2xl border border-black py-3"
                      >
                        <img
                          className="object-cover rounded-full size-10 "
                          src={user.profilePic}
                          alt=""
                        />
                        <p className="font-semibold text-base">{user.name}</p>
                        <p className="text-[10px]">{user.role}</p>
                        <p className="text-[14px]">
                          {"University of engineering of management".slice(
                            0,
                            10
                          )}
                        </p>
                        <div
                          onClick={() => handleConnectClick(index)} // Call the handler with the current index
                          className="text-sm font-bold text-center flex items-center px-4 py-1 text-white rounded-full bg-[#111E4B] cursor-pointer"
                        >
                          {connectedUsers[index] ? "✔️ " : "+ "} Connect
                        </div>
                      </div>
                    );
                  })}
                </div>
                <img
                  className="absolute right-0 z-50 w-[35px] h-[35px] rounded-full bg-white/30 backdrop-blur-md border cursor-pointer border-slate-500 shadow-lg"
                  onClick={scrollInX}
                  src={showMore ? SmallerIcon : GreaterIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsPage;
