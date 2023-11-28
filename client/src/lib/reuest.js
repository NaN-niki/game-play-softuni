export const request = async (method, url, body) => {

    let options = {}

    if(body){
        options = {
            method,
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify(body)
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