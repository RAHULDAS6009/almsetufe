import { users } from "../assets/Constant";
import User from "../assets/user.svg";

const Attendies = () => {
  return (
    <div className=" w-full flex flex-wrap gap-5 justify-between ">
      {users.map((user, index) => (
        <img
          key={index}
          className="cursor-pointer rounded-full w-[15%] p-2  object-cover hover:bg-slate-300"
          src={user.profilePic || User}
          alt="User"
        />
      ))}
    </div>
  );
};

export default Attendies;
