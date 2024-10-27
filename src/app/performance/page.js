import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import { PencilEdit01Icon } from 'hugeicons-react'

const page = () => {
  return (
    <ScrollArea className='h-full'>
            <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-4 md:col-span-3'>
            <div className='bg-gradient-to-r from-[#1a69b9] to-[#17918e] rounded-xl text-white p-4 flex items-center'>

          <div className='w-2/3'>
            <h1 className='text-2xl'>My target CGPA</h1>
           <div className='flex '>
            <PencilEdit01Icon/>
            <p className='ml-4'>Semester: CGPA</p>
           </div>
          </div>
        </div>


          <div>
            Baki code 
          </div>

          
      </div>
      <div className='bg-red-200 '>

      </div>
      </div>

    </ScrollArea>
  )
}

export default page