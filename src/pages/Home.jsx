import { MyProfile } from "../components/MyProfile";
import { Connections } from "../components/Connections";
import { Communities } from "../components/Communities";
import Yukta from "../components/Yukta";
import { SearchBar } from "../components/SearchBar";
import { TopEvents } from "../components/TopEvents";
import { Posts } from "../components/Posts";

const Home = ({ loggedInUser }) => {
  return (
    <section
      className="flex size-full
     text-black fixed  "
    >
      <div className="h-[95%] w-1/5  m-5    ">
        <MyProfile user={loggedInUser} />
      </div>
      <div className=" mx-auto w-3/5 mt-5 flex-1 ">
        <div className="flex flex-col  h-full w-full">
          <SearchBar showProfile={false} showSearch={true} />
          <div className="overflow-y-auto h-full scrollbar-custom">
            <div className="h-[30%] ">
              <TopEvents />
            </div>
            {/* <div className="h-full"> */}
            <Posts />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="w-1/6 m-5 h-[95%]">
        <div className="h-full   flex flex-col justify-between">
          <div className="h-1/3">
            <Connections />
          </div>
          <div className="h-1/2">
            <Communities />
          </div>
          <div className="text-sm py-4 px-5 h-20  rounded-full bg-white">
            <div className="flex justify-start text-lg">
              Talk to <div className="font-bold">{' '}YUKTA</div>
            </div>
            <Yukta />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
