import React from 'react';
import { PencilEdit01Icon,Delete01Icon } from 'hugeicons-react';

const AssesmentModal = ({ title, totalMarks, assessments, onClose,openAddSectionModalHandler }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-3xl relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="absolute top-11 left-80 text-center">
          <p className="text-2xl font-semibold">{totalMarks}</p>
          <p className="text-sm">Total Obtained Marks</p>
        </div>
        <div className="mt-16">
          {assessments.map((assessment, index) => (
            <div key={index} className="grid grid-cols-6 mb-2 border-b py-2">
              <p className='col-span-3'>{assessment.name}</p>
                <p className='col-span-1 text-end'>{assessment.weight}</p>
                <p className='col-span-1 text-end'>{assessment.marks}</p>
                <div className='col-span-1 flex justify-end'>
                    <PencilEdit01Icon className='mr-1' />|
                    <Delete01Icon className='ml-1' />
                </div>
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button onClick={openAddSectionModalHandler} className="border px-8 py-1 rounded me-4">
                Add Section
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentModal;