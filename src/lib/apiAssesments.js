import { token } from "./localStorageHandler";

const baseUrl=process.env.NEXT_PUBLIC_BACKEND_BASE_API 

export const createAssesment = async (courseId,data) => {
    const userToken = token();

    console.log(userToken)
    const response = await fetch(`${baseUrl}/assesment`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
        'courseId':courseId
        },
        body: JSON.stringify(data)
    });
    return response.json();
    }


export const updateAssesment = async (data) => {
    const userToken = token();
    const response = await fetch(`${baseUrl}/assesment`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify(data)
    });
    return response.json();
    }


export const deleteAssesment = async (id) => {
    const userToken = token();
    const response = await fetch(`${baseUrl}/course/assesment/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
        },
    });
    return response.json();
    }


    export const getAssesment = async (id) => {
        const userToken = token();
        const response = await fetch(`${baseUrl}/assesment`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            'courseId':id
            },
        });
        return response.json();
        }