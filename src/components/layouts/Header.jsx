"use client";

import React from 'react';
import { Search01Icon,Notification03Icon, PencilEdit01Icon } from 'hugeicons-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  let pathname=usePathname();
  pathname=pathname.replace('/','');
  pathname=pathname.charAt(0).toUpperCase() + pathname.slice(1);


  return (
    <div className='flex justify-between mt-8 mb-8'>
      <h1 className='font-bold text-2xl'>{pathname}</h1>

    <div className='flex'>
      <div className='items-center border rounded p-0.5 bg-slate-200 mr-2 hidden md:flex'>
        <Search01Icon className='mr-2' width={18} />
        <input
          className='flex-grow outline-none bg-slate-200'
          type='text'
        />
      </div>
  <div className='flex items-center border rounded p-0.5 bg-slate-200 mr-4 md:hidden'>
<Search01Icon /> 
      </div>
            <div className='flex items-center border rounded p-0.5 bg-slate-200 mr-4'>
<Notification03Icon /> 
      </div>
              <div className='flex items-center'>
          <img
            src="https://i.pinimg.com/originals/ad/57/7c/ad577c09de376b2b8446face0c9c4cde.jpg"
            alt="Profile"
            className='w-8 h-8 rounded-full border border-green-500'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;