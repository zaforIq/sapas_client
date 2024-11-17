import { token } from "./localStorageHandler";

const baseUrl=process.env.NEXT_PUBLIC_BACKEND_BASE_API 


export const getAssesmentDetailsWithAchievedMark = async (id) => {
    const userToken = token();
    const response = await fetch(`${baseUrl}/joined/assesmentDetailsWithAchievedMark/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
        },
    });
    return response.json();
    }


    export const getAssesmentDetailsWithAchievedMarkByAssesmentId = async (id) => {
        
        const userToken = token();
        const response = await fetch(`${baseUrl}/joined/assesmentDetailsWithAchievedMarkByAssesmentId/${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
            },
        });
        return response.json();
        }


        export const getSummaryOfAParticularCourse = async (id) => {
                
                const userToken = token();
                const response = await fetch(`${baseUrl}/joined/getSummaryOfAParticularCourse/${id}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                    },
                });
                return response.json();
                }



                export const getSummaryOfAllCouresOfAStudent = async (id) => {
                            
                            const userToken = token();
                            const response = await fetch(`${baseUrl}/joined/getSummaryOfAllCouresOfAStudent/${id}`, {
                                method: 'GET',
                                headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${userToken}`
                                },
                            });
                            return response.json();
                            }
                            


                            export const getparticularCourseDetailsAssesmentAchievedMarkIsNotNull = async (id) => {
                                            
                                            const userToken = token();
                                            const response = await fetch(`${baseUrl}/joined/getparticularCourseDetailsAssesmentAchievedMarkIsNotNull/${id}`, {
                                                method: 'GET',
                                                headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${userToken}`
                                                },
                                            });
                                            return response.json();
                                            }


                                            export const getAssesmentDetailsWithRequiredMark = async (id) => {
                                                        
                                                        const userToken = token();
                                                        const response = await fetch(`${baseUrl}/joined/getAssesmentDetailsWithRequiredMark/${id}`, {
                                                            method: 'GET',
                                                            headers: {
                                                            'Content-Type': 'application/json',
                                                            'Authorization': `Bearer ${userToken}`
                                                            },
                                                        });
                                                        return response.json();
                                                        }