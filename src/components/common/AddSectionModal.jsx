import React from 'react';
import { useState } from 'react';

const AddSectionModal = ({  closeAddSectionModalHandler,currentCourse,handleAddSection }) => {
  console.log('currentCourse',currentCourse)
  const [assesment , setAssesment]=useState({})
  const [obtainMark , setObtainMark]=useState('')


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeAddSectionModalHandler}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-sm relative">
        <h2 className="text-xl font-bold mb-4">{currentCourse.courseName}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="AssesmentName">
            Assesment Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assesmentName"
            type="text"
            placeholder="Assesment Name"
            value={assesment.assesmentName}
            onChange={(e)=>setAssesment({...assesment,assesmentName:e.target.value})}
          />
          </div>
                 <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalMark">
            Total Mark
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="totalMark"
            type="text"
            placeholder="Total Mark"
            value={assesment.totalMark}
            onChange={(e)=>setAssesment({...assesment,totalMark:e.target.value})}
          />
          </div>

                           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievedMark">
            Achieved Mark
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="achievedMark"
            type="text"
            placeholder="Achieved Mark"
            value={assesment.achievedMark}
            onChange={(e)=>setAssesment({...assesment,achievedMark:e.target.value})}
          />
          </div>
          <div className=' flex justify-between gap-4 mt-4'>
            <button onClick={closeAddSectionModalHandler} className='border px-4 py-2 rounded-lg w-full'>Cancel</button>
            <button onClick={()=>{
              handleAddSection(assesment)
            }} className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full'>Add</button>
          
          </div>
        </div>
      </div>
  );
};

export default AddSectionModal;