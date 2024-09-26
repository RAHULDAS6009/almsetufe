import React, { useEffect, useState } from "react";
let events2 = [
    { day: 1, month: "january", title: "Web Dev", desc: "Description" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EtqOpuewOP5rSURN8E4W8rUPhuGoPK2LKw&s"},
    { day: 2, month: "february", title: "App Dev", desc: "Description", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPw-2tr_a_sdwKp6X4SFWp2xMrDHRBBBAWA&s" },
    { day: 3, month: "march", title: "AR", desc: "Description" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgobl4AGKjs2EN-QvNkXW2TWmhiE-QM9bhPA&s"},
    { day: 4, month: "march", title: "Machine Learning", desc: "Description", image:"https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU=" }
];

export const YourEvents = () => {
    const [events, Setevents] = useState(events2);
    const [length, Setlengths] = useState(events2.length);
    const [ind, Setind] = useState(0);
    const [active,Setactive] = useState(0)

    const handleClick = (index) => {
        Setind(index)
        Setactive(index)
    }

    useEffect(() => {
        Setlengths((prev) => events.length);
    }, [events])

    return (
        <div className="  w-full  ">
            <div className="flex items-center justify-center gap-24 mb-5">
                <div className="">
                {length >= 1 ? <EventCard event={events[ind % length]} /> : ""}
                </div>
                <div className="hidden md:block">
                {length >= 2 ? <EventCard event={events[(ind + 1) % length]} /> : ""}
                </div>
                <div className="hidden xl:block">
                {length >= 3 ? <EventCard event={events[(ind + 2) % length]} /> : ""}
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                {Array.from({ length }).map((_, index) => (
                    <div key={index} className={index == active ? "w-3 h-3 border-2 border-black bg-[#0F1035] rounded-full"
                        : "w-3 h-3 border-2 border-black bg-[#ECF7FE] rounded-full"} onClick={() => handleClick(index)}>
                    </div>
                ))}
            </div>
        </div>
    );
};

function EventCard({ event }) {
    return (
        <div className="relative w-[600px] h-[200px] xl:h-40 xl:w-96 2xl:w-96  2xl:h-40 bg-url[(event.image)] rounded-2xl  drop-shadow-xl  shadow-slate-400 shadow-md border-black border-2"
        style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute text-center text-orange-500    top-0 right-6 rounded-b-2xl  w-[60px] h-[60px] bg-[#111E4B]">
                <div className="font-bold text-xl">
                    {event.month.charAt(0).toUpperCase() +
                        event.month.slice(1, 3).toLowerCase() +
                        " ."}
                </div>
                <div className="text-lg font-bold">{event.day}</div>
            </div>
            <p className="px-2 py-2 text-start text-2xl text-white font-bold">{event.title}</p>
            <p className="px-2 text-start text-white font-bold">{event.desc}</p>
        </div>
    );
}
