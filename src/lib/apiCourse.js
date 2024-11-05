import { token } from "./localStorageHandler";

const baseUrl=process.env.NEXT_PUBLIC_BACKEND_BASE_API 

export const CreateCourse = async (data) => {
   
    const userToken = token();
    console.log("baseUrl",baseUrl)
    console.log('userToken',userToken)
    console.log('data',data)
    const response = await fetch(`${baseUrl}/course`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify(data)
    });

    return response.json();

    }


    export const GetCourses = async () => {
        const userToken = token();
        const response = await fetch(`${baseUrl}/course`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        });
        return response.json();
    }



export const updateCourse = async (id, targetScore) => {
  console.log('id', id);
  console.log('targetScore', targetScore);
  const userToken = token();
  const response = await fetch(`${baseUrl}/course/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify({ targetScore }) // Ensure targetScore is sent as a JSON object
  });
  return response.json();
};