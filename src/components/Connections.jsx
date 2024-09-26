import { Link } from "react-router-dom";
export const Connections = () => {
  const suggestedConnections = [
    {
      id: 1,
      name: "Arjun Verma",
      role: "Alumni",
      img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 2,
      name: "Sana Khan",
      role: "Student",
      img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Alumni",
      img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Alumni",
      img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Alumni",
      img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
  ];

  return (

    <div className="bg-[#BBDCF1] rounded-2xl border-slate-800  border-[1px]  h-full">
      {/* Header */}
      <div className=  "flex justify-center items-center h-1/5 bg-[#ECF7FE] rounded-t-2xl border-slate-800 border-b-[1px]  text-center text-lg 3xl:text-3xl  px-2 font-bold ">
        Suggested Connections
      </div>

      {/* Connections List */}
      <div className="h-4/5 flex flex-col justify-between  px-2 border-slate-800  ">
        <div>

        {suggestedConnections.slice(0,3).map((connection) => (
          <div
            key={connection.id}
            className=" flex items-center justify-between py-2 3xl:py-4"
          >
            <div className="flex items-center px-2 ">
              <img
                src={connection.img}
                alt={connection.name}
                className="rounded-full size-5 2xl:size-8 mr-3" // Increase the size and border radius
              />
              <Link to={"/"}>
              <span className="text-sm font-medium cursor-pointer">{connection.name}</span>
              </Link>
            </div>
          </div>
        ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center  pb-2 "> {/* Adjusted margin for better spacing */}
          <Link to={"/users/connections"} className="text-[#00000080] font-normal text-sm rounded-lg hover:underline">
            See more
          </Link>
        </div>
      </div>
    </div>

  );
};
