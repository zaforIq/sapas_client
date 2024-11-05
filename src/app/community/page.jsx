import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import Image from 'next/image';
import communityHero from '../../assets/images/cuate.svg';
import Button from '@/components/ui/Button';

const page = () => {
  return (
    <div className=' grid grid-cols-4 gap-4'>
        <div className='col-span-4 md:col-span-3'>
          <div className='[#F0F4FF] flex flex-col items-center rounded'>
            <Image src={communityHero} alt="Community Hero" height="175.092px" />
            <p>Join a Community and Study with friends!</p>
            <Button InnerText='Join Our Community'/>
          </div>
        </div>
        <ScrollArea className='col-span-4 md:col-span-1 bg-green-200'>
            div right
        </ScrollArea>

    </div>
  )
}

export default page