
import { users } from "../assets/Constant";
import Microphone from "../assets/Microphone";
import { AddHost } from "./Speakers";
import User from "../assets/user.svg";


const SeeMembers = () => {
  return (
    <div className="h-full w-full flex flex-col border-black  border-x-2 border-b-2  rounded-2xl">
      <p className="bg-[#111E4B] text-white font-normal py-2 text-center rounded-t-2xl">
        Sell all Members
      </p>
      <div className="w-full flex h-[85%] py-2 px-2 flex-col justify-between">
        <div className="w-full h-3/4 overflow-y-auto scrollbar-custom">
          {users.map((user, index) => {
            return (
              <>
                <MemberComponent
                  key={index}
                  pic={user.profilePic || User}
                  name={user.name ||"user"}
                />
              </>
            );
          })}
        </div>
        <div className=" flex justify-center mx-auto ">
          <AddHost label={"Add participants"} />
        </div>
      </div>
    </div>
  );
};
function MemberComponent({ pic, name }) {
  return (
    <div className="flex justify-between py-2 px-2 items-center">
      <div className="flex gap-5 items-center text-sm font-semibold">
        <img
          className="rounded-full object-cover"
          src={pic}
          alt=""
          width={30}
          height={30}
        />
        {name}
      </div>
      <Microphone width={15} height={15} />
    </div>
  );
}
export default SeeMembers;
