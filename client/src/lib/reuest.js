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

    try {
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error('')
        }
        if (response.status == 204) {
            return {}
        }
        if(response.status == 403){
            throw new Error('Invalid access token')
            //navigate to login
        }

        return await response.json()
    } catch (error) {
        console.log(error.msg)
    }
}

//partial application
// ne ni interesuva konteksta za tova toj e null no zadavame properties
//vtoriq parametur go podavame kato purvi argument na zaqvkite 
export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')