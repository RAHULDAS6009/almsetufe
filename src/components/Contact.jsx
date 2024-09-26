import { users } from "../assets/Constant";
import SearchIcon from "../assets/searchIcon.svg";
import User from "../assets/user.svg";
const Contact = () => {
  return (
    <div className="w-full h-full  flex flex-col justify-between py-2 px-2">
      {/* Search box and Chat */}
      <p className="text-xl font-medium">Chats</p>

      <div className="w-full h-9 relative flex items-center  ">
        <input
          className="px-2 text-sm mx-auto h-full w-full rounded-full border-[1px] border-black"
          placeholder="Search Contacts "
          type="text"
        />
        <img
          className="absolute right-4 "
          width={20}
          height={20}
          src={SearchIcon}
          alt=""
        />
      </div>

      <div className="h-4/5  overflow-y-auto scrollbar-custom  flex flex-col gap-2 ">
        {users.map((user, index) => {
          return (
            <>
              <div key={index} className=" flex w-full items-center gap-5 text-sm font-medium">
                <img
                  className="rounded-full object-cover"
                  src={user.profilePic || User}
                  alt=""
                  width={30}
                  height={30}
                />
                {user.name}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
