import * as request from '../lib/reuest'

const baseUrl = 'http://localhost:3030/jsonstore/comments'


export const createComment = (gameId, username, text) => {
    return request.post(baseUrl, { gameId, username, text })
}

export const getAllByGame = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    })
    //TODO
    const result = await request.get(`${baseUrl}?${query}`)
    return Object.values(result)
}