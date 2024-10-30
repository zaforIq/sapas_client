"use client"

import { useEffect, useState } from 'react';
import { Delete01Icon,Edit01Icon,File01Icon } from 'hugeicons-react';
import AssesmentModal from '@/components/common/AssesmentModal';
import AddSectionModal from '@/components/common/AddSectionModal';
import Button from '@/components/ui/button';
import AddCourse from '@/components/common/AddCourse';

const Courses = () => {
  const [summaryData, setSummaryData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openAddSectionModal, setOpenAddSectionModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const data = [
      {
        courseName: "CSE",
        currentScore: 40,
        targetScore: 80,
        getMarks: 40,
        assessments: [
          { name: 'Quiz 1', weight: '10%', marks: '10 / 15' },
          { name: 'Quiz 2', weight: '15%', marks: '12 / 20' },
          { name: 'Midterm', weight: '25%', marks: '30 / 40' },
          { name: 'Final', weight: '50%', marks: '45 / 50' },
        ],
      },
      {
        courseName: "EEE",
        currentScore: 40,
        targetScore: 80,
        getMarks: 40,
        assessments: [
          { name: 'Quiz 1', weight: '10%', marks: '10 / 15' },
          { name: 'Quiz 2', weight: '15%', marks: '12 / 20' },
          { name: 'Midterm', weight: '25%', marks: '30 / 40' },
          { name: 'Final', weight: '50%', marks: '45 / 50' },
        ],
      },
    ];
    setSummaryData(data);
  }, []);

  const onClose = () => {
    setOpenModal(false);
    setSelectedCourse(null);
  };


  const openModalWithCourse = (course) => {
    setSelectedCourse(course);
    setOpenModal(true);
  };

  const openAddSectionModalHandler = () => {
    setOpenModal(false);
    setOpenAddSectionModal(true);
  }

  const closeAddSectionModalHandler = () => {
    setOpenAddSectionModal(false);
  }

  const [addCourseModalIsOpen , setAddCourseModalIsOpen] = useState(false)

  return (
    <div className='flex flex-col'>
      {openModal && selectedCourse && (
        <AssesmentModal
          title={selectedCourse.courseName}
          totalMarks={selectedCourse.getMarks}
          assessments={selectedCourse.assessments}
          onClose={onClose}
          openAddSectionModalHandler={openAddSectionModalHandler}
          
        />
      )}

    {addCourseModalIsOpen && <AddCourse closeModal={() => setAddCourseModalIsOpen(false)} />}
      {openAddSectionModal && <AddSectionModal closeAddSectionModalHandler={closeAddSectionModalHandler}/>}
      <div className=''>
        {summaryData && summaryData.length > 0 ? (
          summaryData.map((data, index) => (
            <button
              key={index}
              className='grid grid-cols-8 py-2 border-b items-center text-left w-full'
              onClick={() => openModalWithCourse(data)}
            >
              <div className='col-span-4 flex items-center'>
                <File01Icon className='mr-2' />
                <div>
                  <p className=''>{data.courseName}</p>
                  <p className='text-sm text-gray-600'>Tap to view</p>
                </div>
              </div>
              <p className='col-span-2 text-end'>{data.getMarks}</p>
              <div className='flex col-span-2 justify-end'>
                <Delete01Icon className='mr-2' />|
                <Edit01Icon className='ml-2' />
              </div>
            </button>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className=' flex mt-4 justify-center'>
        <Button InnerText="Add Course" btnOnclick={()=>setAddCourseModalIsOpen(true)}/>
      </div>
    </div>
  );
};

export default Courses;