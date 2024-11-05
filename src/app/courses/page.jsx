"use client"

import { useEffect, useState } from 'react';
import { Delete01Icon,Edit01Icon,File01Icon } from 'hugeicons-react';
import AssesmentModal from '@/components/common/AssesmentModal';
import AddSectionModal from '@/components/common/AddSectionModal';
import Button from '@/components/ui/button';
import AddCourse from '@/components/common/AddCourse';
import { GetCourses } from '@/lib/apiCourse';
import { createAssesment, getAssesment } from '@/lib/apiAssesments';
import { createMark } from '@/lib/apiMark';

const Courses = () => {
  const [summaryData, setSummaryData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openAddSectionModal, setOpenAddSectionModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assessments, setAssessments] = useState([]);
const [presentCourse,setPresentCourse]=useState('')

  useEffect(() => {
  GetCourses()
    .then((data) => {
      console.log(data)
      setSummaryData(data);
    })
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      getAssesment(selectedCourse.courseId)
        .then((data) => {
          console.log("ek number",data);
          setAssessments(data);
        });
    }
  }, [selectedCourse]);
  
  

  const onClose = () => {
    setOpenModal(false);
    setSelectedCourse(null);
  };


  const openModalWithCourse = (course) => {
    setSelectedCourse(course);
    setOpenModal(true);
  };

  const openAddSectionModalHandler = (currentCourse) => {
    console.log("ami current",currentCourse);
    // setCurrentCourse(currentCourse);
    setPresentCourse(currentCourse)
    setOpenModal(false);
    setOpenAddSectionModal(true);
  }

  const closeAddSectionModalHandler = () => {
    setOpenAddSectionModal(false);
  }

  const [addCourseModalIsOpen , setAddCourseModalIsOpen] = useState(false)


  const handleAddSection = (assesment) => {
    createAssesment(selectedCourse.courseId, assesment)
      .then((res) => {
        createMark(res.courseId,res.assesmentId,assesment.achievedMark)
        .then((res) => {
          console.log(res)
        })
        getAssesment(selectedCourse.courseId)
          .then((data) => {
            setAssessments(data);
          });
      });
    

      closeAddSectionModalHandler();
  }

  return (
    <div className='flex flex-col'>
      {openModal && selectedCourse && (
        <AssesmentModal
        selectedCourse={selectedCourse}
          onClose={onClose}
          openAddSectionModalHandler={openAddSectionModalHandler}
          setSummaryData={setSummaryData}
          assessments={assessments}
          
        />
      )}

      {addCourseModalIsOpen && <AddCourse closeModal={() => setAddCourseModalIsOpen(false)} />}
{openAddSectionModal && <AddSectionModal closeAddSectionModalHandler={closeAddSectionModalHandler} currentCourse={presentCourse} handleAddSection={handleAddSection} />}
<div className=''>
  {summaryData && summaryData.length > 0 ? (
    <>
      <div className='grid grid-cols-8 py-2 border-b items-center text-left w-full font-semibold'>
        <div className='col-span-4'>Course Name</div>
        <div className='col-span-2 text-end'>Credit</div>
        <div className='col-span-2 text-end'>Target Score</div>
      </div>
      {summaryData.map((data) => (
        <button
          key={data.courseId}
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
          <p className='col-span-2 text-end'>{data.credits}</p>
          <p className='col-span-2 text-end'>{data.targetScore}</p>
        </button>
      ))}
    </>
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