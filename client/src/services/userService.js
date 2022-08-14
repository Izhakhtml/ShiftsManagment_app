const BASIC_API = "http://localhost:8080/user"
export const REGISTER = async (register) => {
    try {
        return await fetch(`${BASIC_API}/register`, {
            method: 'POST',
            body: JSON.stringify(register),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
export const LOGIN = async (login) => {
    try {
        return await fetch(`${BASIC_API}/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
export const EDIT = async (id, editUser) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(editUser),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    } catch (error) {
        return error
    }
}
export const GetById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(response => response.json())
            .catch(error => console.log(error))
    } catch (error) {
        return error
    }
}