import { useState } from "react";

const Microphone = ({width,height}) => {
    const [mute, setMute] = useState(false);

    const toggleMute = () => {
        setMute(prevMute => !prevMute);
    };

    return (
        <div onClick={toggleMute} className="rounded-full bg-[#BBDCF1] cursor-pointer p-2">
            <img 
                src={`${mute ? "https://img.icons8.com/?size=24&id=jkqQE2I90I8R&format=png" : "https://img.icons8.com/?size=24&id=BIkeIZT4ORoW&format=png"}`} 
                width={width} 
                height={height} 
                alt="Microphone" 
            />
        </div>
    );
};

export default Microphone;
