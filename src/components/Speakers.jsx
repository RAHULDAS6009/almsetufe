import { users } from "../assets/Constant";
import User from "../assets/user.svg";
import Plus from "../assets/plus.svg";

const Speakers = () => {
  return (
    <div className="w-full flex h-full m-2  items-center justify-between  px-5">
   
      {users.slice(0,3).map((user, index) => {  
        return (
          <>
            <img
              key={index}
              className="rounded-full w-[15%] p-2  object-cover hover:bg-slate-300"
              src={user.profilePic || User}
              alt=""
            />
          </>
        );
      })}
      <AddHost label={"Add Host"}/>
    </div>
  );
};

export function AddHost({label}){
  return <div className="cursor-pointer hover:bg-slate-300 flex  rounded-full gap-2 text-base font-bold bg-[#FFFFFF] px-4 py-2 border border-slate-600">
    <img className="cursor-pointer" src={Plus} width={20} height={20} alt=""  />
{label}
  </div>
}

export default Speakers;
