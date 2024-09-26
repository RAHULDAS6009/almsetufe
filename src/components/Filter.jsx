import React,{useState} from 'react';
// import filter from "../assets/filter.svg"
import filter from "../assets/filter.svg";

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false);
    const [option,setOption] = useState("All")

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (text) => {
        setOption(text)
    };

    return (
        <div onClick={toggleDropdown}  className="hover:cursor-pointer flex items-center justify-around gap-5 bg-white border-2 border-black rounded-2xl h-7 w-40 relative">
            <p>{option}</p>
            <button className="">
                <img src={filter} alt="" className='w-7 h-6'/>
            </button>

            {isOpen && (
                <ul className="bg-white text-black hover:cursor-pointer rounded-2xl absolute top-7 ">
                    <li className='h-10 w-40 text-center border-black border-2 rounded-t-2xl' onClick={()=>handleClick("All")}>All</li>
                    <li className='h-10 w-40 text-center border-black border-t-0 border-2' onClick={()=>handleClick("Branch")}>Branch</li>
                    <li className='h-10 w-40 text-center border-black border-t-0 border-2 rounded-b-2xl' onClick={()=>handleClick("Year")}>Year</li>
                </ul>
            )}
        </div>
    );
};
