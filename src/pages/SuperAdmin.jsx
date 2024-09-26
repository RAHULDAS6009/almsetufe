import React, { useState } from 'react'
import SearchIcon from "../assets/searchIcon.svg";
import Filter from '../components/Filter';
import { SearchBar } from '../components/SearchBar';
import CollegeList from '../components/CollegeList';

export default function SuperAdmin() {
  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")

  function onClick() {
    setInput("");
  }

  return (
    <div className="bg-[#ECF7FE] flex flex-col justify-center items-center">
      <div className='w-[90vw] mt-5 mb-8 flex justify-start gap-4 items-center' >
        {/* top portion */}
        <img src="https://presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png?x31571" className='w-16 h-16 rounded-full border-2 border-black' alt="" />
        <div>
          <p>Government of Rajasthan</p>
          <p>Department of Technical Education</p>
        </div>
      </div>

      {/* Bottom Portion*/}
      <div className="w-[90vw] h-full">
        {/* Send Email To College */}
        <div className="flex border-2 border-black rounded-t-xl justify-center items-center h-16 gap-5 p-10">
          <p className='text-lg'>Send Email to: </p>
          <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter College Email ...'
            className='w-[400px] bg-white text-black border-black border-2 rounded-2xl text-center outline-none' />
          <button className='hover:bg-[#BBDCF1] hover:text-black  hover:border-black bg-[#0F1035] w-36 h-7 rounded-xl text-white'>Send</button>
        </div>

        <div className='flex flex-col items-center justify-center border-t-0 border-2 border-black rounded-b-xl'>

          <div className='p-3 gap-10 flex items-center justify-center'>
            {/* Search Bar */}
            <SearchBar superAdmin={true} showSearch={true}/>

            {/* Filter */}
            <Filter />
          </div>

          <div className='mt-5 overflow-y-auto max-h-[380px] scrollbar-custom'>
            <CollegeList />
          </div>

          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
