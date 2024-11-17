import React, { createContext, useState } from 'react';
import { getAssesmentDetailsWithAchievedMark } from '@/lib/apiJoin'; // Ensure this function is correctly imported

const assesmentContext = createContext();

export const AssesmentProvider = ({ children }) => {
    const [assesmentId, setAssesmentId] = useState(null);
    const [assesmentWithMark, setAssesmentWithMark] = useState(null);


    return (
        <assesmentContext.Provider value={{ assesmentId,setAssesmentId,assesmentWithMark,setAssesmentWithMark}}>
            {children}
        </assesmentContext.Provider>
    );
};

export default assesmentContext;