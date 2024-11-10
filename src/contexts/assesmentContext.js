import React, { createContext, useState } from 'react';
import { getAssesmentDetailsWithAchievedMark } from '@/lib/apiJoin'; // Ensure this function is correctly imported

const assesmentContext = createContext();

export const AssesmentProvider = ({ children }) => {
    const [assessment, setAssessment] = useState(null);

    const fetchAssessmentData = async (assessmentId) => {
        try {
            const data = await getAssesmentDetailsWithAchievedMark(assessmentId);
            console.log('Assessment Data:', data);
            setAssessment(data);
        } catch (error) {
            console.error('Error fetching assessment data:', error);
        }
    };

    return (
        <assesmentContext.Provider value={{ assessment, fetchAssessmentData }}>
            {children}
        </assesmentContext.Provider>
    );
};

export default assesmentContext;