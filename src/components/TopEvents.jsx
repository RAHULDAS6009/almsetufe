/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import GreaterIcon from "../assets/chevright.svg";
import LessIcon from "../assets/chevleft.svg";

let dates2 = [
  {
    day: 1,
    month: "january",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s",
  },
  {
    day: 5,
    month: "february",
    image:
      "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
  },
  {
    day: 12,
    month: "march",
    image:
      "https://i0.wp.com/softwarespace.ie/wp-content/uploads/2022/08/software-development-project-ideas.png?fit=600%2C399&ssl=1",
  },
  {
    day: 20,
    month: "april",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg",
  },
  {
    day: 25,
    month: "may",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s",
  },
  {
    day: 30,
    month: "june",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg",
  },
  {
    day: 15,
    month: "july",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s",
  },
  {
    day: 18,
    month: "august",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s",
  },
  {
    day: 22,
    month: "september",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s",
  },
  {
    day: 10,
    month: "october",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s",
  },
];

export const TopEvents = () => {
  const scrollContainerRef = useRef();
  const [viewVisible, setViewVisible] = useState(false);

  function handleScroll() {
    if (scrollContainerRef.current) {
      // Scrolls the container to the right by 3 card widths or left if viewVisible is true
      scrollContainerRef.current.scrollBy({
        left: viewVisible ? -3 * 300 : 3 * 300, // Assuming each EventCard has a width of 300px
        behavior: "smooth",
      });
    }
    setViewVisible(!viewVisible);
  }

  return (
    <div className="relative w-full h-[80%] pt-5 flex items-center">
      <div
        ref={scrollContainerRef}
        className="flex w-full gap-10 h-full overflow-x-hidden "
      >
        {dates2.map((date, index) => {
          return <EventCard date={date} key={index} />;
        })}
      </div>
      <ViewAll handleScroll={handleScroll} viewVisible={viewVisible} />
    </div>
  );
};

function EventCard({ date }) {
  return (
    <div
      className="cursor-pointer relative flex-shrink-0 w-1/4 h-full flex justify-center items-center bg-[#ECF7FE] rounded-lg font-bold text-white drop-shadow-xl shadow-slate-700/3 border border-black"
      style={{
        backgroundImage: `url(${date.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute text-center text-orange-500 top-0 right-4 rounded-b-2xl w-[46px] h-[55px] bg-[#111E4B]">
        <div className="font-bold text-sm">
          {date.month.charAt(0).toUpperCase() +
            date.month.slice(1, 3).toLowerCase() +
            " ."}
        </div>
        <div className="text-lg font-bold">{date.day}</div>
      </div>
      <p className="text-xl">Event</p>
    </div>
  );
}

function ViewAll({ handleScroll, viewVisible }) {
  return (
    <div className="  text-slate-400 text-[14px]">
      <img
        className="w-[30px] h-[30px] rounded-full bg-slate-300 hover:bg-slate-200 cursor-pointer"
        src={viewVisible ?  LessIcon: GreaterIcon}
        alt="Scroll Button"
        onClick={handleScroll}
      />
      {/* {viewVisible && (
        <div className="mt-2 hover:underline text-[2px]">
          <a href="/users/events">View all</a>
        </div>
      )} */}
    </div>
  );
}
