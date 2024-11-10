import React, { useState } from 'react';
import { PencilEdit01Icon,Delete01Icon } from 'hugeicons-react';
import { GetCourses, updateCourse } from '@/lib/apiCourse';




const AssesmentModal = ({selectedCourse, onClose,openAddSectionModalHandler,setSummaryData,assessments }) => {
  const [targetScore,setTargetScore]=useState('')
  const [targetScoreModalIsOpen,settargetScoreModalIsopen]=useState(false)



  const handleAssesMentEditWithMark=(assesmentId)=>{
  //  openAddSectionModalHandler(selectedCourse,assesmentId)
    
  }
  const handleAssesmentDelete=(assesmentId)=>{
    
  }




const handleSetTargetScore=()=>{
updateCourse(selectedCourse.courseId,targetScore)

.then((res)=>console.log(res))
GetCourses().then((data) => {
  setSummaryData(data);
} )
  settargetScoreModalIsopen(false)
}
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-3xl relative">
       <div className='flex justify-between'>
         <h2 className="text-xl font-bold mb-4">{selectedCourse.courseName}</h2>
         <div className='flex gap-1 relative'>
          <h1>Target Score: {selectedCourse.targetScore}</h1>
          <PencilEdit01Icon onClick={()=>settargetScoreModalIsopen(true)}/>
{targetScoreModalIsOpen &&             <div className='absolute h-36 w-36 bg-red-300 rounded shadow p-2'>
              <h1>Edit Target: </h1>
              <input className='w-20' placeholder='type here ' value={targetScore} onChange={(e)=>setTargetScore(e.target.value)}/>
              <button onClick={handleSetTargetScore} className='bg-blue-400'>Submit</button>
            </div>}
            
         </div>
       </div>
        
        <div className="absolute top-11 left-80 text-center">
          <p className="text-2xl font-semibold">100</p>
          <p className="text-sm">80</p>
        </div>
        <div className="mt-16">
          {assessments.map((assessment, index) => (
            <div key={index} className="grid grid-cols-6 mb-2 border-b py-2">
              <p className='col-span-3'>{assessment.assesmentName}</p>
               <p className='col-span-1 text-end'>{assessment.achievedMark}</p>
                <p className='col-span-1 text-end'>{assessment.highestMark}</p>
               
                <div className='col-span-1 flex justify-end'>
                    <PencilEdit01Icon onClick={()=>{handleAssesMentEditWithMark(assessment.assesmentId)}} className='mr-1' />|
                    <Delete01Icon onClick={()=>{handleAssesmentDelete(assessment.assesmentId)}} className='ml-1' />
                </div>
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button onClick={()=>openAddSectionModalHandler(selectedCourse)} className="border px-8 py-1 rounded me-4">
                Add Section
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentModal;