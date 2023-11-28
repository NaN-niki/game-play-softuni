import * as request from '../lib/reuest'

const baseUrl = 'http://localhost:3030/jsonstore/comments'


export const createComment = (gameId, username, text) => {
    return request.post(baseUrl, { gameId, username, text })
}

export const getAllByGame = async () => {
    const result = await request.get(baseUrl)
    return Object.values(result)
}