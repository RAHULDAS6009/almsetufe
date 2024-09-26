import { useState, useEffect, useRef } from "react";
import chevLeft from "../assets/chevleft.svg";
import chevRight from "../assets/chevright.svg";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = [
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
];

const CalendarWithTime = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]); // Auto-select first time slot by default
  const [showPopup, setShowPopup] = useState(false);

  const timeContainerRef = useRef(null);

  const [months] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  // Generate dates for the selected month
  const generateDates = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const dateArr = Array(firstDay).fill(null);
    for (let i = 1; i <= daysInMonth; i++) {
      dateArr.push(i);
    }
    return dateArr;
  };

  // Handle month and year transitions
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Automatically focus on the current date on load
  useEffect(() => {
    setSelectedDate(today.getDate());
  }, []);

  // Handle infinite scroll logic for time slots
  const handleScroll = () => {
    const container = timeContainerRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = container.children[0].offsetHeight;
    const totalSlots = timeSlots.length;

    // Calculate visible item index and adjust the scroll position
    const index = Math.round(scrollTop / itemHeight);
    const infiniteIndex = index % totalSlots;

    if (timeSlots[infiniteIndex]) {
      setSelectedTime(timeSlots[infiniteIndex]);
    }

    // Adjust scroll to give an infinite scroll feel
    if (scrollTop <= itemHeight * 2) {
      container.scrollTo(0, scrollTop + itemHeight * totalSlots);
    } else if (scrollTop >= itemHeight * (totalSlots * 2)) {
      container.scrollTo(0, scrollTop - itemHeight * totalSlots);
    }
  };

  useEffect(() => {
    // Automatically scroll to the middle of the extended list
    const container = timeContainerRef.current;
    const itemHeight = container.children[0].offsetHeight;
    const middlePosition = timeSlots.length * itemHeight;
    container.scrollTo(0, middlePosition);
  }, []);

  return (
    <div className="relative w-full  h-full ">
      <div className="h-full flex flex-col justify-between px-4 py-4">
        <p className="w-full text-center h-[10%] text-2xl font-extrabold">
          Select Date & Time
        </p>

        <div className=" w-full  h-[80%]   flex ">
          {/* Calendar Section */}
          <div className="w-1/2 h-full  ">
            {/* Calendar Header */}
            <div className="w-full h-full flex flex-col justify-center gap-1">
              <div className="flex justify-between mb-4">
                <p className="text-2xl font-semibold">{currentYear}</p>
              </div>

              {/* Month  Navigation */}
              <div className="flex gap-5 justify-center items-center w-full text-2xl   font-extrabold mb-4">
                <div
                  onClick={handlePrevMonth}
                  className="cursor-pointer rounded-full   hover:bg-slate-400 flex justify-center items-center"
                >
                  <img src={chevLeft} width={20} height={20} alt="" />
                </div>
                <div>{months[currentMonth]}</div>
                <div
                  onClick={handleNextMonth}
                  className="cursor-pointer rounded-full   hover:bg-slate-400  flex justify-center items-center"
                >
                  <img src={chevRight} width={20} height={20} alt="" />
                </div>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 w-full text-sm mb-4">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className="col-span-1 text-center text-sm font-semibold"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-2">
                {generateDates().map((date, index) => (
                  <div
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    className={`cursor-pointer text-sm text-center py-2 px-2 rounded-full ${
                      date === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear()
                        ? "bg-yellow-500 text-white" // Highlight today
                        : selectedDate === date
                        ? "bg-blue-500 text-white" // Highlight selected date
                        : " hover:bg-slate-400"
                    }`}
                  >
                    {date || ""}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Time Selection Section */}
          <div className="w-1/2 h-full flex gap-5 justify-center items-center">
            <div
              className="overflow-y-scroll  h-[42%] relative scrollbar-custom"
              ref={timeContainerRef}
              onScroll={handleScroll}
            >
              {/* Infinite Scroll Effect */}
              {Array(3)
                .fill(timeSlots)
                .flat()
                .map((time, index) => (
                  <div
                    key={index}
                    className={`text-sm px-2 text-center py-4 rounded-lg mb-2 transition-opacity ${
                      selectedTime === time
                        ? "bg-blue-500 font-bold  text-white " // Full opacity for the selected time
                        : "bg-white opacity-30 scale-75" // Reduced opacity for unselected times
                    }`}
                  >
                    {time}
                  </div>
                ))}

              {/* Glassmorphism Effect Center Box */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-full h-16 bg-white bg-opacity-10 backdrop-blur-md border border-white rounded-lg flex justify-center items-center pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Button */}
        <div className="h-[10%] flex justify-center items-center ">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            onClick={() => setShowPopup(true)}
          >
            Select
          </button>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Confirm Selection
            </h3>
            <p className="text-lg text-white mb-6">
              You have selected {months[currentMonth]} {selectedDate},{" "}
              {currentYear} <br />
              Time: {selectedTime}
            </p>
            <div className="flex justify-between">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                onClick={() => setShowPopup(false)}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWithTime;
