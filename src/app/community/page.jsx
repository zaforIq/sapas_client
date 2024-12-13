'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import communityHero from '../../assets/images/cuate.svg'
import Notes from '@/components/community/Notes'
import Questions from '@/components/community/Questions'
import { getNotes, getQuestions } from '@/lib/apicommunity'

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_API

const Page = () => {
  const [notes, setNotes] = useState([])
  const [questions, setQuestions] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  useEffect(() => {
    getNotes().then((data) => {
      setNotes(data)
    })
    getQuestions().then((data) => {
      setQuestions(data)
    })
  }, [])

  const openModal = (content) => {
    setModalContent(content)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalContent(null)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-[#F0F4FF] flex flex-col items-center rounded p-4">
        <Image src={communityHero} alt="Community Hero" height={175} priority />
 
        {/* Main Content Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[600px] overflow-hidden  w-full">
          {/* Notes Section */}
          <div className="space-y-4 overflow-y-auto max-h-[450px] px-4 ">
            <div className='flex justify-between'>
               <h2 className="text-xl font-semibold">Notes</h2>
                       <button
            className="flex items-center space-x-2 text-blue-500 hover:underline"
            onClick={() => openModal('notes')}
          >
            +
            <span>Add Notes</span>
          </button>
            </div>
            {notes.length === 0 ? (
              <p>No Notes Found</p>
            ) : (
              notes.map((note) => (
                <div key={note.materialId} className="flex space-x-4  border-b">
                  <iframe
                    src={`http://localhost:3001/api/community/note/${note.filename}`}
                    width="100"
                    height="100"
                    className="border rounded"
                  ></iframe>
                  <div className="flex-1">
                    <span className="block text-lg font-semibold">{note.title}</span>
                    <a
                      href={`http://localhost:3001/api/community/note/${note.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Full PDF
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Questions Section */}
          <div className="space-y-4 overflow-y-auto max-h-[450px] px-4">
            
            <div className='flex justify-between'>
              <h2 className="text-xl font-semibold">Questions</h2>
                <button
            className="flex items-center space-x-2 text-blue-500 hover:underline"
            onClick={() => openModal('questions')}
          >
            +
            <span>Add Questions</span>
          </button>
            </div>
            {questions.length === 0 ? (
              <p>No Questions Found</p>
            ) : (
              questions.map((question) => (
                <div key={question.materialId} className="flex space-x-4  border-b">
                  <iframe
                    src={`http://localhost:3001/api/community/question/${question.filename}`}
                    width="100"
                    height="100"
                    className="border rounded"
                  ></iframe>
                  <div className="flex-1">
                    <span className="block text-lg font-semibold">{question.title}</span>
                    <a
                      href={`http://localhost:3001/api/community/question/${question.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Full PDF
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={closeModal}
            >
              ✕
            </button>
            {modalContent === 'notes' && <Notes />}
            {modalContent === 'questions' && <Questions />}
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
