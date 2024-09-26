import React from "react";
import { PostCard } from "./PostCard.jsx";
import steve from "../assets/steve.jpg"
import buisness from "../assets/buisnessgrowth.jpg"

export const Posts = () => {
  const samplePost = {
    userName: "Yuvraj Singh",
    userLocation: "University of Engineering and Management",
    userImg: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    content:
      " Robotics is the intersection of science, engineering and technology that produces machines, called robots, that replicate or substitute for human actions. Robots perform basic and repetitive tasks with greater efficiency and accuracy than humans, making them ideal for industries like manufacturing.",
    photos: [
      steve,
      buisness,
      "https://cdn.pixabay.com/photo/2023/03/05/21/11/ai-generated-7832244_640.jpg",
      "https://images.pexels.com/photos/9029795/pexels-photo-9029795.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  };
  const samplePost1 = {
    userName: "Rohan Sharma",
    userLocation: "University of Engineering and Management",
    userImg: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    content:
      " A machine is a physical system that uses power to apply forces and control movement to perform an action. The term is commonly applied to artificial devices, such as those employing engines or motors, but also to natural biological macromolecules, such as molecular machines. Machines can be driven by animals and people, by natural forces such as wind and water, and by chemical, thermal, or electrical power, and include a system of mechanisms that shape the actuator input to achieve a specific application of output forces and movement. They can also include computers and sensors that monitor performance and plan movement, often called mechanical systems.",
    photos: [
      "https://esskaymachines.com/blog/wp-content/uploads/2020/12/industrial-machinery-imhe-384x288_tcm27-3207.jpg",
      "https://cdn.prod.website-files.com/60c8c09220a68c595992bca4/65548695f7d67904b8ec9b3b_machine-01.jpg",
      "https://esskaymachines.com/blog/wp-content/uploads/2020/12/Industrial-Machines.jpg",
      "https://cdn2.hubspot.net/hubfs/637862/Blog-Images/Data-Analysis/iiot-challenges-for-industrial-machines.jpg",
    ],
  };
  return (
    <div className="rounded-lg  flex flex-col gap-5 bg-[#ECF7FE]  ">
      <PostCard post={samplePost} />
      <PostCard post={samplePost1} />
      <PostCard post={samplePost}/> 
    </div>
  );
};
