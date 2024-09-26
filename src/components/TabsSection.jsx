import { useState } from "react";
import { connectionsNavPage } from "../assets/Constant";
import SearchIcon from "../assets/searchIcon.svg";
import SortIcon from "../assets/sortIcon.svg";
import axios from "axios";
import { API } from "../utils/api";
import { Link } from "react-router-dom";

const TabsSection = ({
  userConnections,
  setUserConnections,
  pendingApprovals,
  setPendingApprovals,
  pendingRequests,
  setIsChanged,
}) => {
  const [tab, setTab] = useState("Connections");

  const renderTable = () => {
    switch (tab) {
      case "Connections":
        return (
          <Table
            users={userConnections}
            status={tab.toLowerCase()}
            setIsChanged={setIsChanged}
          />
        );
      case "Pending":
        return (
          <Table
            users={pendingApprovals}
            status={tab.toLowerCase()}
            setIsChanged={setIsChanged}
            setUserConnections={setUserConnections}
            setPendingApprovals={setPendingApprovals}
          />
        );
      default:
        return (
          <Table
            users={pendingRequests}
            status={tab.toLowerCase()}
            setIsChanged={setIsChanged}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-5 h-full justify-between">
      <div className="flex h-[10%] max-w-screen-sm gap-5 items-center">
        {connectionsNavPage?.map((nav, index) => {
          let count = nav.title === "Connections" ? userConnections?.length : 0;
          count = nav.title === "Pending" ? pendingApprovals?.length : count;
          count =
            nav.title === "Pending Requests" ? pendingRequests?.length : count;
          return (
            <div
              key={index}
              onClick={() => {
                setTab(nav.title);
              }}
              className={`cursor-pointer px-4 py-2 text-xl rounded-full ${
                tab === nav.title ? "bg-[#111E4B] text-white" : "bg-[#FFFFFF]"
              } border border-slate-600 hover:bg-[#111E4B] hover:text-white`}
            >
              {nav.title} {count > 0 ? `(${count})` : null}
            </div>
          );
        })}
      </div>
      <div className="h-[90%]">{renderTable()}</div>
    </div>
  );
};

const Table = ({
  users,
  status,
  setUserConnections,
  setPendingApprovals,
  setIsChanged,
}) => {
  return (
    <div className="px-4 lg:px-10 border-2 border-black rounded-2xl h-full relative overflow-x-hidden overflow-y-auto">
      <FilterAndSearch />
      <div className="mt-20 max-h-[calc(100vh-150px)] lg:max-h-screen scrollbar-custom pr-2">
        {users?.map((user) => (
          <TableRow
            key={user.connectionId}
            connectionId={user.connectionId}
            userId={user.user._id}
            name={user.user.name}
            profilePic={user.user.profilePic}
            title={status}
            setUserConnections={setUserConnections}
            setPendingApprovals={setPendingApprovals}
            setIsChanged={setIsChanged}
          />
        ))}
      </div>
    </div>
  );
};

function FilterAndSearch() {
  return (
    <div className="flex items-center justify-start absolute top-0 w-full mt-5 space-x-2 px-2 lg:px-0">
      <div className="relative w-2/5 md:w-1/3">
        <input
          type="text"
          placeholder="Search.."
          className="w-full bg-white text-slate-400 text-sm py-2 pr-10 px-2 border-2 border-slate-700/30 shadow-md rounded-2xl focus:outline-none"
        />
        <img
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 p-1"
          src={SearchIcon}
          alt="searchIcon"
        />
      </div>
      <div className="gap-5 flex items-center justify-between font-medium shadow-md border-2 bg-white border-slate-700/30 text-sm py-1 px-2 rounded-2xl">
        <span>Sort & Filter</span>
        <img
          className="cursor-pointer w-6 h-6 md:w-8 md:h-8 p-1 bg-[#d1e6f3] rounded-lg hover:bg-[#c4e1f3]"
          src={SortIcon}
          alt="Sort Icon"
        />
      </div>
    </div>
  );
}

const TableRow = ({
  connectionId,
  userId,
  name,
  profilePic,
  title,
  setUserConnections,
  setPendingApprovals,
  setIsChanged,
}) => {
  const onApprove = async (connectionId) => {
    try {
      const response = await axios.put(
        `${API}/connections/accept/${connectionId}`
      );
      if (response.status === 200) {
        setPendingApprovals((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        setUserConnections((prevUsers) => [...prevUsers, response.data.data]);
        setIsChanged((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onReject = async (connectionId) => {
    try {
      const response = await axios.delete(
        `${API}/connections/reject/${connectionId}`
      );
      if (response.status === 200) {
        setPendingApprovals((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        setIsChanged((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full border-2 border-slate-900 rounded-3xl flex justify-between items-center px-2 py-2 my-2">
      <Link
        to={`../../users/u/${userId}`}
        className="flex items-center gap-2 w-full"
      >
        <div className="flex justify-items-start items-center gap-2">
          <img className="w-10 h-10 rounded-full" src={profilePic} alt="ppic" />
          <div className="flex items-baseline gap-2 text-md font-normal">
            {name}
          </div>
        </div>
      </Link>
      {title === "pending" ? ( // Update condition here
        <div className="flex gap-5 items-center">
          <div
            className="hover:border-orange-400 rounded-2xl border-2 bg-green-600 text-white px-4 py-2 font-medium cursor-pointer"
            onClick={() => {
              onApprove(connectionId);
            }} // Approve the user
          >
            Accept
          </div>
          <div
            className="rounded-2xl border-2 border-red-700 text-red-500 hover:bg-red-400 hover:text-white px-5 py-2 font-medium cursor-pointer"
            onClick={() => {
              onReject(connectionId);
            }} // Reject the user
          >
            Reject
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TabsSection;
