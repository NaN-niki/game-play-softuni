import * as request from '../lib/reuest'

const baseUrl = 'http://localhost:3030/data/comments'


export const createComment = (gameId, text) => {
    return request.post(baseUrl, { gameId, text })
}

export const getAllByGame = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
        //suzai mi pole owner v koeto vurni infoto za tozi user, koito go e suzdal 
    })

    const result = await request.get(`${baseUrl}?${query}`)
    return result
}