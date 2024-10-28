import React from 'react';

const AddSectionModal = ({  closeAddSectionModalHandler }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeAddSectionModalHandler}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-sm relative">
        <h2 className="text-xl font-bold mb-4">Add Section</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sectionName">
            Section Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sectionName"
            type="text"
            placeholder="Section Name"
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
          />
          </div>
          <div className=' flex justify-between gap-4 mt-4'>
            <button onClick={closeAddSectionModalHandler} className='border px-4 py-2 rounded-lg w-full'>Cancel</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full'>Add</button>
          
          </div>
        </div>
      </div>
  );
};

export default AddSectionModal;