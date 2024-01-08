const request = async (method, url, body) => {
    let options = {
        method,
        headers: {},
    }

    const accessToken = localStorage.getItem('token')

    if (body) {
        options.body = JSON.stringify(body)
    }

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken
    }

    const response = await fetch(url, options)

    if (response.status == 204) {
        return []
    }
    
    const result = await response.json()

    if (response.ok !== true) {
        throw new Error(result.message)
    }

    return result

}

//partial application
// ne ni interesuva konteksta za tova toj e null no zadavame properties
//vtoriq parametur go podavame kato purvi argument na zaqvkite 
export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')