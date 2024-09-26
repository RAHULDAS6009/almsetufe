import { Communities } from "../components/Communities";
import { SearchBar } from "../components/SearchBar";
import Speakers from "../components/Speakers";
import Attendies from "../components/Attendies";
import Mircophone from "../assets/Microphone";
import More from "../assets/More";
import Phone from "../assets/Phone";
import SeeMembers from "../components/SeeMembers";
import PanelChatBox from "../components/PanelChatBox";

const PanelDiscussion = () => {
  return (
    <div className="flex flex-col h-full p-5 gap-2 fixed ">
      <SearchBar showSearch={true} showProfile={true} dropDown={false} />
      <div className=" w-full flex h-[90%]  ">
        <div className="w-1/6">
          <Communities admin={true} />
        </div>
        <div className="w-4/6 h-full flex flex-col justify-between p-5 py-10">
          <div className="h-full">
            <div className="h-1/4">
              <Speakers />
            </div>
            <div className="h-2/3 w-full  overflow-y-auto scrollbar-custom border-black  border-y-4 py-4">
              <Attendies />
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <Mircophone width={40} height={40}/>
            <More />
            <Phone />
          </div>
        </div>
        <div className="w-1/4 h-full  flex flex-col justify-between ">
          <div className="h-[40%]">
            <SeeMembers />
          </div>
          <div className="h-[58%]">
            <PanelChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelDiscussion;
