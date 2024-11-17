import React from 'react';
import CircularProgressBar from '../ui/CircularProgressBar';
import { File01Icon } from 'hugeicons-react';

const Summary = (props) => {
  console.log(props.summaryData);

  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-4 md:col-span-3'>
        <div className='bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-xl text-white p-4 flex items-center'>
          <div className='w-1/3 flex justify-center'>
            <CircularProgressBar percentage={80} fill1="#ffffff" fill2="#000000" />
          </div>
          <div className='w-2/3'>
            <h1 className='text-2xl'>Overall Goal Completion</h1>
            <p className='mt-1'>Congratulations! You've achieved an impressive 61% of your goals for this term!</p>
          </div>
        </div>
        <div className=' rounded-lg mt-4'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-bold'>Summary</h1>
            <button className=' rounded'>View All</button>
          </div>
          <div className=' p-2 rounded-lg'>
            <div className='grid grid-cols-4 gap-4 font-semibold'>
              <p>Course</p>
              <p>Current Score</p>
              <p>Target Score</p>
              <p>Marks to get</p>
            </div>
          </div>
          {props.summaryData.map((data, index) => (
            <div key={index} className='bg-green-100 mt-2 p-2 rounded-lg grid grid-cols-4 gap-4 items-center'>
              <div className='flex items-center'>
                <File01Icon className='mr-2'/>
                <div>
                  <p className='font-semibold'>{data.courseName}</p>
                  <p className='text-sm text-gray-600'>Tap to view</p>
                </div>
              </div>
              <p>{data.currentScore}</p>
              <p>{data.targetScore}</p>
              <p>{data.targetScore-data.achievedMark}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-4 md:col-span-1 bg-gray-300 p-4 rounded-lg'>
       <p>Priority List</p>
       <p className='text-sm mt-2'>Based on your target goal and your current situation, the subjects that warrant your attention are</p>
       {props.summaryData.map((data, index) => (
            <div key={index} className=' mt-2 p-2 rounded-lg flex items-center'>
              <p className='border p-2 rounded-full bg-white w-8 h-8 flex items-center justify-center'>{index}</p>
              <p className='ml-4'>{data.courseName}</p>
            </div>
          ))}
           <div className="relative h-[257px] w-full max-w-full overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg" />
            <div className="absolute left-2 top-2 flex flex-col space-y-2">
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">A+</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">A</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">A-</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">B+</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">B</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">B-</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">C+</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">C</div>
  <div className="text-[#5d6871] text-sm font-normal font-['Lato'] tracking-tight">D</div>
</div>
<div className="absolute left-10 bottom-2 flex space-x-2 items-end">
  <div className="flex flex-col items-center">
    <div className="w-4 h-[215px] bg-gradient-to-b from-[#17918e] via-[#196cb5] to-[#1a69b9] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">Os</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[167px] bg-[#61a1c2] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">dm</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[191px] bg-[#61a1c2] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">ds</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[191px] bg-[#61a1c2] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">algo</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[215px] bg-gradient-to-b from-[#17918e] via-[#196cb5] to-[#1a69b9] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">ph</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[143px] bg-[#61a1c2] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">jh</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[215px] bg-gradient-to-b from-[#17918e] via-[#196cb5] to-[#1a69b9] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">cc</div>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-4 h-[215px] bg-gradient-to-b from-[#17918e] via-[#196cb5] to-[#1a69b9] rounded-tl rounded-tr" />
    <div className="text-sm mt-1">ff</div>
  </div>
</div>
  
          </div>
      </div>
    </div>
  );
};

export default Summary;