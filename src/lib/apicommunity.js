const baseUrl=process.env.NEXT_PUBLIC_BACKEND_BASE_API 

export const getNotes = async () => {
    const response = await fetch(`${baseUrl}/community/note`);
    return response.json();
}

export const getQuestions = async () => {
    const response = await fetch(`${baseUrl}/community/question`);
    return response.json();
}