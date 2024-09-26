import { SearchBar } from "../components/SearchBar";
import { MdEdit } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import { API } from "../utils/api";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserProfile = () => {
  const dummyUser = {
    name: "Saahiti Tiwari",
    role: "Alumni",
    institution: "UEM, Kolkata",
    bio: "Passionate Frontend Developer student with a strong foundation in HTML, CSS, JavaScript, and React. Experienced in creating responsive, user-friendly web interfaces. Eager to apply problem-solving skills and innovative design ideas in real-world projects.",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    skills: [
      "C/C++",
      "Java",
      "JavaScript",
      "Front-end Developer",
      "Interested in coding contests",
    ],
    events: [
      "Tech for Good",
      "Green Developers",
      "Open Source Enthusiasts",
      "Hackerranker",
      "Futuristics",
    ],
    achievements: [
      "Consistently maintained a high GPA, ranking in the top 10% of the class, or received honors such as the Dean's List or a subject-specific award.",
      "Completed a senior project or thesis that was highly praised by faculty or industry professionals.",
      "Participated in a relevant internship or co-op experience that provided hands-on training in the field.",
      "Held a leadership role in a student organization or club, particularly one related to the field of study.",
      "Received a scholarship, grant, or other financial award based on academic achievement or potential.",
    ],
    workExperience: [
      "Consistently maintained a high GPA, ranking in the top 10% of the class, or received honors such as the Dean's List or a subject-specific award.",
      "Completed a senior project or thesis that was highly praised by faculty or industry professionals.",
      "Participated in a relevant internship or co-op experience that provided hands-on training in the field.",
      "Held a leadership role in a student organization or club, particularly one related to the field of study.",
      "Received a scholarship, grant, or other financial award based on academic achievement or potential.",
    ],
    socialLinks: [
      { icon: "fab fa-linkedin", url: "https://linkedin.com" },
      { icon: "fab fa-x-twitter", url: "https://twitter.com" },
      { icon: "fab fa-youtube", url: "https://youtube.com" },
      { icon: "fab fa-instagram", url: "https://instagram.com" },
      { icon: "fab fa-facebook", url: "https://facebook.com" },
    ],
    college: "UEM,JAIPUR",
  };

  const [userProfile, setUserProfile] = useState(null);
  const [connection, setConnection] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get(`${API}/users/current`);
        setCurrentUser(response.data.data);
      } catch (error) {
        console.log;
      }
    };

    getCurrentUser();
  }, [userId]);

  useLayoutEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API}/users/u/${userId}`);
        setUserProfile(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  useLayoutEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await axios.get(
          `${API}/connections/is-connection/${userId}`
        );
        console.log(response.data.data);
        setConnection(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    checkConnection();
  }, [userId]);

  if (userProfile?._id == currentUser?._id) {
    navigate("/users/profile");
    return;
  }

  const handleConnect = async () => {
    try {
      const response = await axios.post(`${API}/connections/create/${userId}`);
      setConnection(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90vw]">
        <SearchBar showProfile={false} showSearch={true} />
      </div>

      <div className="w-[90vw] h-[90vh] border-2 flex items-center border-black rounded-xl p-4">
        <div className="w-full h-[95%] flex justify-around items-center">
          {/* Profile Details */}
          <div className="h-[100%] w-[20%] flex flex-col justify-between items-center p-4  border-black border-2 rounded-xl">
            <div className=" flex flex-col justify-center items-center gap-3">
              <img
                src={userProfile && userProfile.profilePic}
                className="w-32 h-32 rounded-full"
                alt=""
              />
              <p className="text-2xl font-bold">
                {userProfile && userProfile.name}
              </p>
              <p>
                {userProfile &&
                  userProfile.role[0].toUpperCase() + userProfile.role.slice(1)}
              </p>
              <p className="font-semibold">
                {userProfile && userProfile.college}
              </p>
              {connection &&
                connection.message == "Not Sent" &&
                !(
                  currentUser.role == "student" &&
                  userProfile?.role == "student"
                ) && (
                  <button
                    className="w-32 h-8 bg-[#111E4B] flex justify-center items-center cursor-pointer hover:bg-gray-400 text-white rounded-xl gap-3"
                    onClick={handleConnect}
                  >
                    Connect <FaPlus className="" />{" "}
                  </button>
                )}
              {connection &&
                connection.message == "Sent" &&
                connection.connection.isAccepted && (
                  <>
                    <button
                      className="w-32 h-8 flex justify-center items-center bg-gray-400 text-white rounded-xl gap-3"
                      disabled
                    >
                      Connected
                    </button>
                    <Link
                      to={`../mentorship/${userProfile && userProfile._id}`}
                    >
                      <button className="w-32 h-8 bg-[#111E4B] flex justify-center items-center cursor-pointer hover:bg-gray-400 text-white rounded-xl gap-3">
                        Mentorship
                      </button>
                    </Link>
                  </>
                )}
              {connection &&
                connection.message == "Sent" &&
                !connection.connection.isAccepted && (
                  <button
                    className="w-36 h-8 flex justify-center items-center bg-gray-400 text-white rounded-xl gap-3"
                    disabled
                  >
                    Request Pending
                  </button>
                )}
              <p className="w-40 h-8 border-black border-2 bg-white rounded-2xl text-center">
                147 Connections
              </p>
            </div>

            <div className="">
              <p className="text-center mb-2">Find Me On:</p>
              <div className="flex justify-center items-center gap-4">
                {dummyUser.socialLinks.map((item, index) => (
                  <div className="" key={index}>
                    <FaGithub className="w-8 h-8 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[75%] h-full flex flex-col justify-between">
            {/* Bio */}
            <div className="w-full h-[30%] shadow-black shadow-sm rounded-2xl">
              <p className="text-xl h-[30%] flex justify-center items-center text-white bg-[#111E4B] text-center  rounded-t-2xl">
                Bio
              </p>
              <p className="p-2 h-[70%] flex justify-center items-center border-l-2 border-r-2 border-b-2 border-black rounded-b-2xl">
                {userProfile && userProfile.bio}
              </p>
            </div>

            <div className="w-full h-[30%] flex justify-between items-center">
              <div className="w-[48%] h-[100%] border-l-2 shadow-black shadow-sm border-r-2 border-b-2 border-black rounded-2xl">
                <p className="text-xl h-[30%] flex justify-center items-center text-white bg-[#111E4B] text-center  rounded-t-2xl">
                  Experience
                </p>
                <div className="p-4 h-[70%]  overflow-y-auto overflow-x-auto scrollbar-thumb-black mb-2 scrollbar-track-[#ECF7FE] scrollbar-thin scrollbar-corner-transparent">
                  {dummyUser.workExperience.map((item, index) => (
                    <p
                      key={index}
                      className="flex justify-center items-center h-[100%] gap-3"
                    >
                      <span className="font-semibold">{index + 1}.</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-[48%] h-[100%] border-l-2 shadow-black shadow-sm border-r-2 border-b-2 border-black rounded-2xl">
                <p className="text-xl h-[30%] flex justify-center items-center text-white bg-[#111E4B] text-center  rounded-t-2xl">
                  Achievements
                </p>
                <div className="p-4 h-[70%]  overflow-y-auto overflow-x-auto scrollbar-thumb-black mb-2 scrollbar-track-[#ECF7FE] scrollbar-thin scrollbar-corner-transparent">
                  {dummyUser.achievements.map((item, index) => (
                    <p
                      key={index}
                      className="flex justify-center items-center h-[100%] gap-3"
                    >
                      <span className="font-semibold">{index + 1}.</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-[30%] flex justify-between items-center">
              <div className="w-[48%] h-[100%] border-l-2 shadow-black shadow-sm border-r-2 border-b-2 border-black rounded-2xl">
                <p className="text-xl h-[30%] flex justify-center items-center text-white bg-[#111E4B] text-center  rounded-t-2xl">
                  Skills and Interests
                </p>
                <div className=" h-[70%] flex justify-center items-center">
                  <div className="w-[90%] h-[90%] overflow-y-auto overflow-x-auto scrollbar-thumb-black mb-2 scrollbar-track-[#ECF7FE] scrollbar-thin scrollbar-corner-transparent ">
                    {userProfile &&
                      userProfile.skills.map((item, index) => (
                        <p
                          key={index}
                          className="flex justify-start items-center  gap-3"
                        >
                          <span className="font-semibold">{index + 1}.</span>
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <div className="w-[48%] h-[100%] border-l-2 shadow-black shadow-sm border-r-2 border-b-2 border-black rounded-2xl">
                <p className="text-xl h-[30%] flex justify-center items-center text-white bg-[#111E4B] text-center  rounded-t-2xl">
                  Events
                </p>
                <div className=" h-[70%] flex justify-center items-center">
                  <div className="w-[90%] h-[90%] overflow-y-auto overflow-x-auto scrollbar-thumb-black mb-2 scrollbar-track-[#ECF7FE] scrollbar-thin scrollbar-corner-transparent ">
                    {dummyUser.events.map((item, index) => (
                      <p
                        key={index}
                        className="flex justify-start items-center  gap-3"
                      >
                        <span className="font-semibold">{index + 1}.</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
