import React from 'react';

const AddSectionModal = ({  closeAddSectionModalHandler }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeAddSectionModalHandler}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-xl relative">
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
        </div>
      </div>
  );
};

export default AddSectionModal;