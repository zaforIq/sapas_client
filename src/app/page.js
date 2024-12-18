"use client";

import Image from 'next/image';
import hero from '../assets/images/hero.png';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { token, student } from '@/lib/localStorageHandler';
import AddCourse from '@/components/common/AddCourse';
import Summary from '@/components/common/Summary';
import { getSummaryOfAllCouresOfAStudent,getCoursesWithMarksAndTarget } from '@/lib/apiJoin';




export default function Home() {
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [summaryView, setSummaryView] = useState(false);
  const [summaryData, setSummaryData] = useState(null);



  useEffect(() => {
    if (userToken) {
      getCoursesWithMarksAndTarget().then(data => {
        setSummaryData(data);
        console.log(data);
      });
    }
  }
  , [userToken])

  useEffect(() => {
    const fetchedToken = token();
    const fetchedUserData = student();
    setUserToken(fetchedToken);
    setUserData(fetchedUserData);
  }, []);


    useEffect(() => {
    if (userToken && summaryData) {
      setSummaryView(true);
    }
  }, [summaryData]);

  const addCourseHandler = () => {
    openModal();
  }

    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if (userToken) {
  //     getSummaryOfAllCouresOfAStudent(userData.studentId).then(data => {
        
  //       setSummaryData(data);
  //     });
  //   }
  // }, [userToken, userData]);



  
  return (
    <ScrollArea className="h-full">
{summaryView?<Summary summaryData={summaryData}/>:
      <div className="flex flex-col items-center justify-center h-full">
        {isOpen && <AddCourse closeModal={closeModal} />}
        <Image src={hero} alt="Hero" width={400} height={200} />
        <h1 className="text-3xl font-bold mt-4">Welcome to SAPAS</h1>
        <p className="text-center mt-4">Easily track your courses and performance. Start by adding your subjects.</p>
        {userToken && <button onClick={addCourseHandler} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Course</button>}

        {!userToken && <Link href="/auth/login"><button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button></Link>}
      </div>

}

      
      
    </ScrollArea>
  );
}