// return a function to make a request to the server for sign up

const baseUrl=process.env.apiBaseUrl;
export const signUp = (data) => {
    return fetch(`${baseUrl}/api/student/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    }

export const signIn = (data) => {
    return fetch(`${baseUrl}/api/student/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
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