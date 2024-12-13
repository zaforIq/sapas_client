"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home01Icon,StudyDeskIcon, Book01Icon, Analytics01Icon, Logout01Icon, Settings02Icon, DiscoverCircleIcon } from 'hugeicons-react';


const Sidebar = () => {
  const pathname = usePathname(); 

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home01Icon /> },
    { name: 'Courses', path: '/courses', icon: <Book01Icon /> },
    { name: 'Performance Analysis', path: '/performance', icon: <Analytics01Icon /> },
    {name:'Community Zone',path:'/community',icon:<DiscoverCircleIcon/>},
  ];


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('student');
    window.location.href = '/';
  }

  return (
    <div className='hidden md:flex flex-col h-full'>
      <div>
        <div className='flex p-2'>
          <StudyDeskIcon />
          <Link href='/' className='ml-2 text-blue-700 font-bold'>SAPAS</Link>
        </div>
        <nav className='mt-8'>
          <ul>
            {navItems.map((item) => (
              <div key={item.path} className={`flex p-2 mt-2 ${pathname === item.path ? 'bg-slate-200 rounded shadow' : ''}`}>
                {item.icon}
                <li className='ml-2'>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
      <div className='flex  mt-96'>
        <Logout01Icon />
        <button onClick={handleLogout} className='ml-2 mt-auto'>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;