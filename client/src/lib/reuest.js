const request = async (method, url, body) => {
    let options = {}

    if (body) {
        options = {
            method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }

    try {
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error('')
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