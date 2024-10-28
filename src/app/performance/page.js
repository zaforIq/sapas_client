"use client";

import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import { PencilEdit01Icon,NextIcon,Backpack01Icon,Menu01Icon,Navigation01Icon,Doc01Icon } from 'hugeicons-react'
import { useState } from 'react'

const page = () => {
  const [courses, setCourses] = useState([{courseName: 'CSE'}, {courseName: 'EEE'}, {courseName: 'CSE'}, {courseName: 'EEE'}])

  return (
    <ScrollArea className='h-full'>
            <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-4 md:col-span-3'>
            <div className='bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-xl text-white p-4 flex items-center'>

          <div className='w-2/3'>
            <h1 className='text-2xl'>My target CGPA</h1>
           <div className='flex '>
            <PencilEdit01Icon/>
            <p className='ml-4'>Semester: CGPA</p>
           </div>
          </div>
        </div>


          <div className='mt-4'>
             <div className='flex justify-between'>
              <h1 className='text-xl mb-2'>Select Course</h1>
              <NextIcon/>
             </div>
             <div className='flex gap-8'>
             {courses.map((course, index) => (<button key={index} className='bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-xl text-white font-bold py-2 px-16'>{course.courseName}</button>))}
             </div>
             <div className='bg-gray-200 mt-4 rounded-lg p-4'>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <Backpack01Icon/>
                  <p>Course</p>
                </div>
                <Menu01Icon/>

              </div>
             
                <div className='flex justify-between mt-4'>
                  <p className='text-sm'>Your Progress</p>
                  <p>60%</p>
                </div>
                    <div className='relative w-full h-4 bg-gray-300 rounded-full overflow-hidden'>
      <div className='absolute top-0 left-0 h-full bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-xl' style={{ width: '80%' }}></div>
              </div>
              <div className='mt-4 grid grid-cols-2'>
                <div className=' flex flex-col items-center col-span-2 md:col-span-1'>
                  <div className='flex gap-2'>
                    <Navigation01Icon/>
                    <p>Related Tasks</p>
                  </div>
                  <div className='flex flex-col items-center mt-8'>
                    <Doc01Icon/>
                    <p>No Open task</p>
                    <p>we will add taskkk miwi ioqmwq imqwo </p>
                  </div>
                </div>
                <div className=' flex flex-col items-center md:border-l border-black col-span-2 md:col-span-1 mt-8 border-t pt-8 md:pt-0 md:mt-0 md:border-t-0'>
                  <div className='flex gap-2'>
                    <Navigation01Icon/>
                    <p>Upcoming Exams</p>
                  </div>
                  <div className='flex flex-col items-center mt-8'>
                    <Doc01Icon/>
                    <p>No Open task</p>
                    <p>we will add taskkk miwi ioqmwq imqwo </p>
                  </div>
                </div>
                </div>
             </div>
          </div>

          
      </div>
      <div className='bg-blue-200 rounded-lg p-4 '>
               <p>Priority List</p>
       <p className='text-sm'>Based on your target goal and your current situation, the subjects that warrant your attention are</p>
       {courses.map((data, index) => (
            <div key={index} className=' mt-2 p-2 rounded-lg flex items-center'>
              <p className='border p-2 rounded-full bg-white w-8 h-8 flex items-center justify-center'>0</p>
              <p className='ml-4'>{data.courseName}</p>
            </div>
          ))}
      </div>
      </div>

    </ScrollArea>
  )
}

export default page