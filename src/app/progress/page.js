"use client"
import React from 'react'
import { useState } from 'react'
import CircularProgressBar from '@/components/ui/CircularProgressBar'


const page = () => {
    const [courses, setCourses] = useState([{courseName: 'CSE'}, {courseName: 'EEE'}, {courseName: 'CSE'}, {courseName: 'EEE'}])


  return (
    <div className=''>
        
            <div className=" bg-[#f0f4ff] rounded-xl flex-col justify-start items-center gap-8 inline-flex w-full" >
  <div className="self-stretch h-[88px] flex-col justify-start items-center gap-4 flex">
    <div className="self-stretch h-[72px] px-8 py-5 bg-[#f0f4ff] rounded-lg flex-col justify-start items-start gap-2.5 flex">
      <div className="w-[1016px] justify-between items-center inline-flex">
        <div className="w-[251px] h-[31.71px] text-[#252525] text-2xl font-medium font-['Lato']">Your Grades by Courses</div>
        <div className="w-[153px] relative">
          <div className="w-6 h-6 left-[129px] top-0 absolute flex-col justify-start items-start inline-flex" />
          <div className="left-0 top-0 absolute text-[#5d6871] text-xl font-normal font-['Lato']">Select Course</div>
        </div>
      </div>
    </div>
    <div className="w-[1044px] h-[0px] border border-[#a6a6a6]"></div>
  </div>
  <div className="h-[118.59px] flex-col justify-start items-start gap-[18px] flex">
    <div className="w-[1044px] h-[26.59px] relative">
      <div className="w-[120.47px] h-[26.24px] left-0 top-[0.35px] absolute text-[#5d6871] text-xl font-medium font-['Lato']">Course Name</div>
      <div className="w-[101.40px] h-[26px] left-[330px] top-0 absolute text-[#5d6871] text-xl font-normal font-['Lato']">Attendance</div>
      <div className="w-[41.16px] h-[26px] left-[510px] top-0 absolute text-[#5d6871] text-xl font-normal font-['Lato']">Quiz</div>
      <div className="w-[103.41px] h-[26px] left-[632px] top-0 absolute text-[#5d6871] text-xl font-normal font-['Lato']">Assignment</div>
      <div className="w-[83.33px] h-[26px] left-[815px] top-0 absolute text-[#5d6871] text-xl font-normal font-['Lato']">Mid Term</div>
      <div className="w-[87px] h-[26px] left-[957px] top-0 absolute text-[#5d6871] text-xl font-normal font-['Lato']">Get Score</div>
    </div>
    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-8 flex">
      <div className="self-stretch h-[0px] border border-[#a6a6a6]"></div>
      <div className="justify-start items-center gap-[251px] inline-flex">
        <div className="text-black text-2xl font-medium font-['Lato'] tracking-tight">Algorithm</div>
        <div className="w-[663px] h-[42px] relative">
          <div className="w-[45px] h-[42px] left-[618px] top-0 absolute">
            <div className="w-[45px] h-[42px] left-0 top-0 absolute bg-gradient-to-br from-[#1a69b9] to-[#17918e] rounded-lg" />
            <div className="left-[8px] top-[7px] absolute text-[#f0f4ff] text-2xl font-normal font-['Lato']">37</div>
          </div>
          <div className="w-[45px] h-[42px] left-[476px] top-0 absolute">
            <div className="w-[45px] h-[42px] left-0 top-0 absolute bg-[#f0f4ff] rounded-lg" />
            <div className="left-[8px] top-[7px] absolute text-[#252525] text-2xl font-normal font-['Lato']">20</div>
          </div>
          <div className="w-[45px] h-[42px] left-[303px] top-0 absolute">
            <div className="w-[45px] h-[42px] left-0 top-0 absolute bg-[#f0f4ff] rounded-lg" />
            <div className="left-[15px] top-[7px] absolute text-[#252525] text-2xl font-normal font-['Lato']">4</div>
          </div>
          <div className="w-[45px] h-[42px] left-[150px] top-0 absolute">
            <div className="w-[45px] h-[42px] left-0 top-0 absolute bg-[#f0f4ff] rounded-lg" />
            <div className="left-[8px] top-[7px] absolute text-[#252525] text-2xl font-normal font-['Lato']">12</div>
          </div>
          <div className="w-[45px] h-[42px] left-0 top-0 absolute">
            <div className="w-[45px] h-[42px] left-0 top-0 absolute bg-[#f0f4ff] rounded-lg" />
            <div className="left-[15px] top-[7px] absolute text-[#252525] text-2xl font-normal font-['Lato']">7</div>
          </div>
        </div>
      </div>
    </div>
  </div>

        </div>
        <div className='grid grid-cols-3 gap-4 mt-8'>
            <div className='col-span-3 md:col-span-1 bg-[#f0f4ff] rounded-lg p-4'>
               <div className='flex justify-between'>
                <h1>Progress In Course</h1>
                <p>V</p>
               </div>
                <div className='flex justify-center mt-8'>
                    <CircularProgressBar percentage={70} fill1="#ffffff" fill2="#000000" />
                    </div>
            </div>
            <div className='col-span-3 md:col-span-2 bg-[#f0f4ff] rounded-lg p-4'>
               
                <div className='flex justify-between'>
                     <h1>Current Total Grade</h1>
                     <p>V</p>
                </div>
                <div className='mt-4'>
                    {courses.map((course, index) => (
                                          <div key={index} className="w-[595px] h-[49.42px] relative mt-4">
  <div className="w-[87px] h-[27.42px] left-0 top-[22px] absolute text-[#252525] text-xl font-normal font-['Lato']">Algorithm</div>
  <div className="w-[457px] h-4 left-[138px] top-[29.70px] absolute bg-white rounded-lg" />
  <div className="w-[456px] h-[21.70px] left-[139px] top-0 absolute">
    <div className="w-2.5 h-[21.70px] left-0 top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">0</div>
    <div className="w-[19px] h-[21.70px] left-[32px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">10</div>
    <div className="w-[19px] h-[21.70px] left-[76px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">20</div>
    <div className="w-[19px] h-[21.70px] left-[120px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">30</div>
    <div className="w-[19px] h-[21.70px] left-[164px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">40</div>
    <div className="w-[19px] h-[21.70px] left-[208px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">50</div>
    <div className="w-[19px] h-[21.70px] left-[252px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">60</div>
    <div className="w-[19px] h-[21.70px] left-[296px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">70</div>
    <div className="w-[19px] h-[21.70px] left-[340px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">80</div>
    <div className="w-[19px] h-[21.70px] left-[384px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">90</div>
    <div className="w-7 h-[21.70px] left-[428px] top-0 absolute text-[#5d6871] text-base font-normal font-['Lato']">100</div>
  </div>
  <div className="w-56 h-4 left-[139px] top-[30px] absolute bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-lg" />
</div>))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page