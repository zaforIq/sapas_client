import { token } from "./localStorageHandler";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_API;

export const createMark = async (courseId, assesmentId, markObtained) => {
    console.log("eito", courseId, assesmentId, markObtained);
    const userToken = token();

    console.log(userToken);
    const response = await fetch(`${baseUrl}/mark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            'courseId': courseId,
            'assesmentId': assesmentId
        },
        body: JSON.stringify({ markObtained })
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

