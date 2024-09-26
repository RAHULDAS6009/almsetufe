import EnvelopeIcon from "../assets/Envelope.jsx"; // Import the React component
import TickIcon from "../assets/Tick.jsx"; // Import the React component
import GithubIcon from "../assets/Github.jsx";

// Main Profile Component

export const MyProfile = ({ user }) => {
  return (
    // <div className="fixed top-0 left-0 h-screen w-1/5 px-5 py-2">
    <div className=" bg-[#BBDCF1] h-full rounded-2xl  border-[1px] border-slate-800">
      <div className="flex flex-col items-center h-full p-5 gap-5 ">
        {/* {user.profilePic} */}
        <div className="flex flex-col w-full items-center">
          <div className=" overflow-hidden rounded-full  ">
            <img
              className="object-cover w-[152px] h-[152px]"
              src={
                (user && user.profilePic) ||
                "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              }
              alt="Profile Picture"
            />
          </div>
          {/* <img className="rounded-full w-32 h-32 " src={user.profilePic || "https://flowbite.com/docs/images/people/profile-picture-2.jpg"} alt="" /> */}
          <div className="text-2xl py-2 flex items-center">
            {(user && user.name) || "Rahul Das"}
            <TickIcon color="white" />
          </div>
          <div className="text-sm">
            {(user && user.role[0].toUpperCase() + user.role.slice(1)) ||
              "Student"}
          </div>
        </div>

        <div className="flex flex-col h-3/4 justify-between w-full items-center ">
          <div className="flex items-center justify-center w-full">
            <SocialAndLink
              iconColor="black"
              url={(user && user.email) || "das206053@gmail.com"}
              gitHuburl={
                (user && user.githubUrl) || "https://github.com/RAHULDAS6009"
              }
            />
          </div>

          <div className="font-light flex flex-col items-center w-full">
            <div className="text-2xl max-2xl:text-sm  font-semibold text-center">
              Profile Performance
            </div>
            <ul className="list-disc list-inside text-xs mt-4 3xl:text-2xl">
              <li>47 connections</li>
              <li>2 Events attended</li>
            </ul>
          </div>
          <div className=" cursor-pointer px-2 text-2xl 3xl:text-4xl 3xl:py-4 rounded-full bg-[#111E4B] text-white  flex justify-center items-center  w-full h-12">
            <div className="flex items-center justify-center gap-5 pb-1">
              <EnvelopeIcon width={28} height={28} color="#ffffff" />
              Messages
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

// Reusable SocialAndLink Component
function SocialAndLink({ iconColor, url, gitHuburl }) {
  return (
    <div className="flex flex-col  ">
      {" "}
      {url && (
        <div className="flex items-center text-[12px] py-1 gap-2 3xl:text-xl  ">
          <EnvelopeIcon color={iconColor} width={15} height={15} />
          <div>{url}</div>
        </div>
      )}
      {gitHuburl && (
        <div className="flex items-center text-[12px] py-1 gap-2 3xl:text-xl">
          <GithubIcon width={15} height={15} />
          <div>
            {gitHuburl.slice(0, 22)}
            {"..."}
          </div>
        </div>
      )}
    </div>
  );
}
