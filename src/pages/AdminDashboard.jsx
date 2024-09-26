import { useEffect, useState } from "react";
import { AdminApprovalsTab } from "../assets/Constant";
import Tab from "../components/Tab";
import Table from "../components/Table";
import axios from "axios";
import { API } from "../utils/api";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Pending Approval");
  const [users, setUsers] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [message, setMessage] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [actionType, setActionType] = useState(""); // State to track action type

  useEffect(() => {
    (async () => {
      setUsers([]);
      setMessage("Loading...");
      try {
        let response;
        if (selectedTab === "Students") {
          response = await axios.get(`${API}/admin/verified-students`);
        } else if (selectedTab === "Alumni") {
          response = await axios.get(`${API}/admin/verified-alumni`);
        } else {
          response = await axios.get(`${API}/admin/unverified-users`);
        }
        setUsers(response.data.data);
        setMessage("");
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedTab, isChanged]);

  // Function to show confirmation modal for approval
  const handleApprove = (userId) => {
    setSelectedUserId(userId);
    setActionType("approve");
    setShowConfirmModal(true);
  };

  // Function to show confirmation modal for rejection or deletion
  const handleRejectOrDelete = (userId) => {
    setSelectedUserId(userId);
    setActionType(selectedTab === "Pending Approval" ? "reject" : "delete");
    setShowConfirmModal(true);
  };

  // Function to handle confirmation of approval, rejection, or deletion
  const confirmAction = async () => {
    try {
      if (actionType === "approve") {
        await axios.put(`${API}/admin/approve-user/${selectedUserId}`);
        setMessage("User Approved");
      } else if (actionType === "reject") {
        await axios.delete(`${API}/admin/reject-user/${selectedUserId}`);
        setMessage("User Rejected");
      } else if (actionType === "delete") {
        await axios.delete(`${API}/admin/delete-user/${selectedUserId}`);
        setMessage("User Deleted");
      }
    } catch (error) {
      console.log(error);
    }

    setShowConfirmModal(false);
    setIsChanged(!isChanged);
  };

  return (
    <div className="w-full py-10 h-screen overflow-hidden relative">
    <div className="flex justify-center gap-20 max-xl:gap-8">
      {/* Render Tab Buttons */}
      {AdminApprovalsTab.map((tabLabel, index) => (
        <div onClick={() => setSelectedTab(tabLabel)} key={index}>
          <Tab label={tabLabel} isActive={selectedTab === tabLabel} />
        </div>
      ))}
    </div>
  
    {/* Display Table component based on selected tab */}
    <div className="max-h-full overflow-auto">
      <Table
        title={selectedTab}
        users={users}
        onApprove={handleApprove}
        onReject={handleRejectOrDelete}
        message={message}
      />
    </div>
  
    {/* Confirmation Modal */}
    {showConfirmModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">
            {actionType === "approve"
              ? "Confirm Approval"
              : actionType === "reject"
              ? "Confirm Rejection"
              : "Confirm Deletion"}
          </h2>
          <p>
            Are you sure you want to {actionType === "approve" ? "approve" : actionType === "reject" ? "reject" : "delete"} this user?
          </p>
          <div className="mt-6 flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => setShowConfirmModal(false)}
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={confirmAction}>
              {actionType === "approve" ? "Approve" : actionType === "reject" ? "Reject" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default AdminDashboard;
