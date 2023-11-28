export const request = async (method, url, body) => {

    try {
        const response = await fetch(url, {
            method,
            body
        })
        
        if (!response.ok) {
            throw new Error('')
        }

        return await response.json()
    } catch (error) {
        console.log(error.msg)
    }
}