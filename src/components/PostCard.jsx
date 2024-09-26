import { useRef, useState } from "react";  
import like from "../assets/like.svg"; 
import shareIcon from "../assets/shareicon.svg"; 
import commentIcon from "../assets/comment.svg"; 
import saveIcon from "../assets/saveicon.svg";  

export const PostCard = ({ post }) => {   
  const imageContainerRef = useRef(null);   
  const [direction, setDirection] = useState("");   

  const scrollImages = (direction) => {     
    const container = imageContainerRef.current;     
    const scrollAmount = container.offsetWidth; // Scroll by the width of the container     
    if (direction === "left") {       
      container.scrollLeft -= scrollAmount;     
    } else {       
      container.scrollLeft += scrollAmount;     
    }   
  };   

  return (     
    <div className="bg-[#BBDCF1] rounded-2xl shadow-md relative h-full">       
      {/* User Info */}       
      <div className="flex text-sm text-white rounded-t-2xl h-1/4 pl-5 py-2 items-center mb-3 bg-[#111E4B]">         
        <img src={post.userImg} alt={post.userName} className="rounded-full w-8 h-8 mr-3" />         
        {post.userName}, {post.userLocation}       
      </div>       

      <div className="h-3/4 m-2 flex flex-col gap-5 ">         
        {/* Content */}         
        <p className="text-base mb-2">{post.content}</p>          

        {/* Photos Section */}         
        <div className="relative">           
          {/* Image Scroll Container */}           
          {post.photos && post.photos.length > 0 && (             
            <div className="relative">               
              <div ref={imageContainerRef} className="overflow-hidden flex justify-start">                 
                <div className="flex gap-2 transition-transform">                   
                  {post.photos.slice(0, 4).map((photo, index) => (                     
                    <img key={index} src={photo} alt={`Post photo ${index + 1}`} className="rounded-lg w-1/2 h-52 object-cover  flex-shrink-0 " />                   
                  ))}                 
                </div>               
              </div>                

              {/* Navigation Buttons */}               
              <div className="flex justify-center gap-2 mt-2">                 
                <div                   
                  onClick={() => {                     
                    setDirection("left");                     
                    scrollImages("left");                   
                  }}                   
                  className={`rounded-full h-4 w-4 cursor-pointer hover:bg-slate-400 focus:hover:bg-slate-400 ${direction === "" ? "bg-slate-400" : "bg-slate-500"}`}                 
                ></div>                 
                <div                    
                  onClick={() => {                     
                    setDirection("right");                     
                    scrollImages("right");                   
                  }}                   
                  className={`rounded-full h-4 w-4 cursor-pointer hover:bg-slate-400 focus:hover:bg-slate-400 ${direction === "right" ? "bg-slate-400" : "bg-slate-500"}`}                 
                ></div>               
              </div>             
            </div>           
          )}         
        </div>          

        {/* Buttons */}         
        <div className="flex items-center justify-between ">           
          <div className="flex gap-4">             
            <button className="flex items-center text-gray-600 hover:text-blue-500">               
              {/* Like Icon */}               
              <img src={like} alt="Like" className="w-6 h-6" />             
            </button>             
            <button className="flex items-center text-gray-600 hover:text-blue-500">               
              {/* Share Icon */}               
              <img src={shareIcon} alt="Share" className="w-6 h-6" />             
            </button>             
            <button className="flex items-center text-gray-600 hover:text-blue-500">               
              {/* Comment Icon */}               
              <img src={commentIcon} alt="Comment" className="w-6 h-6" />             
            </button>           
          </div>            

          {/* Save Button */}           
          <button className="absolute bottom-2 right-2 text-gray-600 hover:text-blue-500">             
            {/* Save Icon */}             
            <img src={saveIcon} alt="Save" className="w-6 h-6" />           
          </button>         
        </div>       
      </div>     
    </div>   
  ); 
};
