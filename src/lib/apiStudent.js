// return a function to make a request to the server for sign up

const baseUrl=process.env.NEXT_PUBLIC_BACKEND_BASE_API
export const  signUp =  async (data) => {
    const res = await fetch(`${baseUrl}/student/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const res_1 = await res.json()
    return res_1
}

export const  logIn =  async (data) => {
    console.log(data)
    const res = await fetch(`${baseUrl}/student/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const res_1 = await res.json()
    return res_1
}

export const getStudent = (data) => {
    return fetch(`${baseUrl}/api/student/getStudent`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data}`
        },
    })
}

export const updateStudent = (data) => {
    return fetch(`${baseUrl}/api/student/updateStudent`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteStudent = (data) => {
    return fetch(`${baseUrl}/api/student/deleteStudent`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ' Authorization': `Bearer ${data}`
        },
    })
}