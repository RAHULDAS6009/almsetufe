import Contact from "../components/Contact"
import ChatArea from "../components/ChatArea"

const ChatPage = () => {
  return (
    <div className="fixed w-full h-full flex justify-center items-center">
        <div className="flex items-center w-3/4 h-[86%] rounded-2xl border-[1px] border-black">
        <div className="w-1/4 rounded-2xl border-[1px] border-black  h-[95%] px-2 mx-4">
        <Contact/>
        </div>
        <div className="w-3/4 rounded-2xl border-[1px] border-black h-[95%] mx-4">
        <ChatArea/>
        </div>
        </div>
    </div>
  )
}

export default ChatPage;