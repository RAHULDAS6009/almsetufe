import React from 'react';
import { SearchBar } from '../components/SearchBar';
import acceptImage from '../assets/accept.png';
import removeImage from '../assets/remove.png';

export default function EventDetails() {
  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center'>
      <div className="m-2 w-[1000px]">
        <SearchBar showSearch={true} showProfile={true} />
      </div>
      <div className="flex justify-center items-center gap-20 mb-4">

        {/* Details */}
        <div className="flex flex-col justify-around items-center">
          <div className="w-[470px] h-[290px]">
            <p className='text-white text-center text-xl p-2 bg-[#111E4B] rounded-t-2xl'>Event Title</p>
            <div className='rounded-b-2xl p-4 border-black border-t-0 border-2 text-sm'>
              <p className='text-lg underline mb-2'>Description:</p>
              sto corporis voluptatibus atque? quam expedita architecto alias corrupti maiores officia libero, minus animi tempore similique ab, nihil repudiandae aperiam soluta est nesciunt perspiciatis molestiae ea obcaecati. Earum sint reprehenderit veniam repellat quae similique odio in molestiae quas quidem fugiat debitis, voluptate, repudiandae animi aliquid qui reiciendis libero cumque iusto cupiditate expedita tempore dolor nulla dolorem. Officia ea illum deleniti commodi dolorem molestiae.
            </div>
          </div>

          <div className="w-[470px] h-[300px] flex flex-col p-1 border-black border-2 bg-white rounded-2xl mt-5">
            <p className="text-center text-lg text-[#5485FF] font-bold ">Web Development</p>
            <p className='text-[#8E9AB8] font-bold text-center text-sm'>EVENT</p>
            <p className='font-bold text-center text-sm'>THEME</p>
            <div className="flex justify-center items-center m-3 gap-10">
              <span className=' text-[#8E9AB8] border-2 font-bold rounded-2xl px-3 py-1 text-sm'>Design</span>
              <span className=' text-[#8E9AB8] border-2 font-bold rounded-2xl px-3 py-1 text-sm'>Design</span>
              <span className=' text-[#8E9AB8] border-2 font-bold rounded-2xl px-3 py-1 text-sm'>Design</span>
              <span className=' text-[#8E9AB8] border-2 font-bold rounded-2xl px-3 py-1 text-sm'>Design</span>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex justify-center items-center gap-24">
                <p className=' w-[150px] bg-[#e9ecec] border-2 text-sm rounded-2xl px-3 py-1 text-black font-bold text-center'>Online</p>
                <p className='w-[150px] bg-[#e9ecec] border-2 rounded-2xl text-sm px-3 py-1 text-black font-bold text-center'>Date: 20/09/24</p>
              </div>
              <div className="flex justify-center items-center gap-10">
                <p className='w-[150px] bg-[#e9ecec] border-2 rounded-2xl px-3 py-1 text-sm text-black font-bold text-center'>Time: 5:30PM</p>
                <div className='w-[200px] bg-[#e9ecec] border-2 rounded-2xl px-3 py-1 text-sm text-black font-bold text-center'>
                  <p>Registraion Closes in:</p>
                  <p>2d:10h:49m</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-5">
              <button className='w-[150px] bg-[#3770FF] text-white p-2 rounded-xl hover:bg-[#7e9ded]'>Register</button>
            </div>
          </div>
        </div>

        {/* Approval */}
        <div className="w-[420px] h-[600px] flex flex-col border-black rounded-t-2xl rounded-b-2xl gap-2 border-l-2 border-r-2 border-b-2">
          <p className='text-white text-center text-xl p-2 bg-[#111E4B] rounded-t-2xl'>See All Participants</p>
          <div className="flex items-center justify-end p-2">
            <button className='bg-[#00BA00] text-white text-md px-3 py-1 rounded-2xl'>Approve All</button>
          </div>
          <div className="overflow-y-scroll scrollbar-thumb-black mb-2 scrollbar-track-[#ECF7FE] scrollbar-thin scrollbar-corner-transparent scroll-m-2 sc flex flex-col gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div className="flex px-4 justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s"
                    className='w-10 h-10 rounded-full' alt="" />
                  <p className='font-semibold text-lg'>Virat Sharma Dhoni</p>
                </div>
                <div className="flex gap-5">
                  <button><img src={acceptImage} className='w-6 h-6' alt="" /></button>
                  <button><img src={removeImage} className='w-6 h-6' alt="" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

