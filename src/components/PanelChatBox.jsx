import Sent from "../assets/sent.svg";

const PanelChatBox = () => {
  return (
    <div className="h-full w-full  border-black  border-x-2 border-b-2  rounded-2xl ">
      <div className=" h-full flex flex-col justify-between">
        <p className="bg-[#111E4B] text-white font-normal py-2 text-center rounded-t-2xl">
          Chat Box
        </p>
        {/* chat area */}
        <div className="relative w-full p-2">
  <input
    className="w-full pr-10 outline-none rounded-full py-2 px-4"
    type="text"
    placeholder="type your message"
  />
  <img
    className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-r-full h-full  "
    src={Sent}
    alt="Send"
    width={25}
    height={25}
  />
</div>

      </div>
    </div>
  );
};

export default PanelChatBox;
