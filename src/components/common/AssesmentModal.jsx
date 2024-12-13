import React, { useContext, useEffect, useState } from 'react';
import { PencilEdit01Icon, Delete01Icon } from 'hugeicons-react';
import { GetCourses, updateCourse } from '@/lib/apiCourse';
import assesmentContext from '@/contexts/assesmentContext';
import { getCourseById } from '@/lib/apiCourse';
import { deleteAssesment } from '@/lib/apiAssesments';

const gradeToMark = {
  'A+': 80,
  'A': 75,
  'A-': 70,
  'B+': 65,
  'B': 60,
  'B-': 55,
  'C+': 50,
  'C': 45,
  'C-': 40,
  'F': 0,
};

const AssesmentModal = ({ selectedCourse, onClose, openAddSectionModalHandler, setSummaryData, assessments }) => {
  const [targetScore, setTargetScore] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [targetScoreModalIsOpen, setTargetScoreModalIsOpen] = useState(false);

  const { assesmentId, setAssesmentId } = useContext(assesmentContext);

  const handleAssesMentEditWithMark = (assesmentId) => {
    setAssesmentId(assesmentId);
    openAddSectionModalHandler(selectedCourse, assesmentId);
  };

  const handleAssesmentDelete = (assesmentId) => {
    console.log(assesmentId);
    deleteAssesment(assesmentId).then(() => {
      GetCourses().then((data) => {
        setSummaryData(data);
      });
    }
    );
  };

  useEffect(() => {
    getCourseById(selectedCourse.courseId).then((data) => {
      setTargetScore(data.targetScore);
    });
  }, [selectedCourse]);

  const handleSetTargetScore = () => {
    if (selectedGrade && gradeToMark[selectedGrade] !== undefined) {
      updateCourse(selectedCourse.courseId, gradeToMark[selectedGrade]).then(() => {
        getCourseById(selectedCourse.courseId).then((data) => {
          setTargetScore(data.targetScore);
        });
      });
    }
    setTargetScoreModalIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-3xl relative">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">{selectedCourse.courseName}</h2>
          <div className="flex gap-1 relative">
            <h1>Target Grade: {targetScore}</h1>
            <PencilEdit01Icon onClick={() => setTargetScoreModalIsOpen(true)} />
            {targetScoreModalIsOpen && (
              <div className="absolute h-40 w-48 bg-gray-200 rounded shadow p-4">
                <h1 className="mb-2">Edit Target: </h1>
                <select
                  className="w-full p-2 mb-2 border rounded"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  <option value="" disabled>
                    Select Grade
                  </option>
                  {Object.keys(gradeToMark).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                <button onClick={handleSetTargetScore} className="bg-blue-500 text-white px-4 py-1 rounded">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-11 left-80 text-center">
          <p className="text-2xl font-semibold">100</p>
          <p className="text-sm">80</p>
        </div>
        <div className="mt-16">
          {assessments.map((assessment, index) => (
            <div key={index} className="grid grid-cols-6 mb-2 border-b py-2">
              <p className="col-span-3">{assessment.assesmentName}</p>
              <p className="col-span-1 text-end">{assessment.achievedMark}</p>
              <p className="col-span-1 text-end">{assessment.highestMark}</p>

              <div className="col-span-1 flex justify-end">
                <PencilEdit01Icon
                  onClick={() => {
                    handleAssesMentEditWithMark(assessment.assesmentId);
                  }}
                  className="mr-1"
                />
                |
                <Delete01Icon
                  onClick={() => {
                    handleAssesmentDelete(assessment.assesmentId);
                  }}
                  className="ml-1"
                />
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button
              onClick={() => openAddSectionModalHandler(selectedCourse)}
              className="border px-8 py-1 rounded me-4"
            >
              Add Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentModal;
