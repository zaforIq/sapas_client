import React from 'react';
import CircularProgressBar from '../ui/CircularProgressBar';
import { File01Icon } from 'hugeicons-react';

const Summary = (props) => {
  console.log('props', props);
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-4 md:col-span-3'>
        <div className='bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-xl text-white p-4 flex items-center'>
          <div className='w-1/3 flex justify-center'>
            <CircularProgressBar percentage={80} />
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
              <p>{data.getMarks}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-4 md:col-span-1 bg-gray-300 p-4 rounded-lg'>
       <p>Priority List</p>
       <p className='text-sm'>Based on your target goal and your current situation, the subjects that warrant your attention are</p>
       {props.summaryData.map((data, index) => (
            <div key={index} className=' mt-2 p-2 rounded-lg flex items-center'>
              <p className='border p-2 rounded-full bg-white w-8 h-8 flex items-center justify-center'>0</p>
              <p className='ml-4'>{data.courseName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;