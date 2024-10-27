import React from 'react'

import {Add01Icon} from 'hugeicons-react'
import { CreateCourse } from '@/lib/apiCourse';

const AddCourse = (props) => {

  const [course, setCourse] = React.useState({
    courseName: '',
    courseType: 'Theory',
    credits: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    course.credits=parseInt(course.credits)
   
    CreateCourse(course).then((data) => {
      props.closeModal();
      window.location.href = '/courses';
     
    }
    )
  }
    
  return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-md">
            <Add01Icon className="text-5xl text-blue-500 bg-blue-100 rounded-full p-1.5 mb-4" />
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
                  Course Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="courseName"
                  type="text"
                  placeholder="Course Name"
                  value={course.courseName}
                  onChange={(e) => setCourse({ ...course, courseName: e.target.value })}
                />
</div>
              <div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseType">
                  Course Type
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="courseType"
                  value={course.courseType}
                  onChange={(e) => setCourse({ ...course, courseType: e.target.value })}
                >
                  <option>Theory</option>
                  <option>Lab</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credits">
                  Credits
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="credits"
                  type="text"
                  placeholder="credits"
                  value={course.credits}
                  onChange={(e) => setCourse({ ...course, credits: e.target.value })}
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={props.closeModal}
                  className="border px-8 py-1 rounded me-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-1 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default AddCourse