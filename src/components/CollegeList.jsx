import React, { useState } from 'react'

let college2 = [
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"},
    { name: "University of Engineering and Mangagement" ,city:"Jaipur",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2VvZKHRJL5R4gPqtK9kwzxGDMMlXmX6CiA&s"}
  ];

export default function CollegeList() {
    const [college, setCollege] = useState(college2)

  return (
    <div className=''>
        {college.map((college, index) => {
        return (
          <div className='' key={index}>
            <CollegeCard college={college} />
          </div>
        );
      })}
    </div>
  )
}

function CollegeCard({ college }) {
    return (
      <div className='flex mb-5 mr-4 border-2 rounded-2xl h-12 border-black items-center justify-around gap-96 w-[1200px] bg-[#BBDCF1]'>
        <div className="flex items-center justify-start gap-5">
            <img src={college.image} className='w-10 h-10 rounded-full' alt="" />
            <p className='w-[500px]'>{college.name}</p>
        </div>
            <p className='w-500px'>{college.city}</p>
      </div>
    );
  }

