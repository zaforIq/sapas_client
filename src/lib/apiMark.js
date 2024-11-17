import { token } from "./localStorageHandler";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_API;

export const createMark = async (assesmentId, markObtained) => {
    console.log("eito", assesmentId, markObtained);
    const userToken = token();

    const response = await fetch(`${baseUrl}/mark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({ assesmentId, markObtained })
    });
    return response.json();
};


export const getMarkByAssesmentId = async (assesmentId) => {
    const userToken = token();
    const response = await fetch(`${baseUrl}/mark`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            'assesmentId': assesmentId
        },
    });
    return response.json();
}

export const updateMark = async (assesmentId, markObtained) => {
    const userToken = token();
    const response = await fetch(`${baseUrl}/mark/${assesmentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({ markObtained })
    });
    return response.json();
}

