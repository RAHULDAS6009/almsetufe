import Calendar from "../components/Calendar";
import { SearchBar } from "../components/SearchBar";
const MentorShip = () => {
  return (
    <div className="h-screen w-full  items-center  flex flex-col gap-10">
      <SearchBar showProfile={false} showSearch={true} />
      <div className="flex w-3/4 h-4/5  rounded-2xl border border-slate-600">
        <div className="w-1/3 full">
          <div className="flex flex-col py-5 h-full">
            <p className="bg-yellow-300 rounded-2xl text-sm font-bold   text-pretty w-1/2 text-center py-2 ml-2">
              Asking for Mentorship
            </p>
            <div className="  h-full flex justify-center gap-2 flex-col items-center">
              <img className="border border-slate-400 rounded-full size-48 bg-slate-50 p-4" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" width={50} height={50} alt="" />
              <p className="text-xl font-extrabold">Rahul Das</p>
              <p className="text-sm font-semibold ">Alumni</p>
              <p className="font-bold">Techno India University, Kolkata</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full border-l border-black">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default MentorShip;
