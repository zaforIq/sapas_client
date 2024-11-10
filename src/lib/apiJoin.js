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