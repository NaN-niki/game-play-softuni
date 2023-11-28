import * as request from "../lib/reuest"

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    return Object.values(result)
}

export const create = async (data) => {
    return await request.post(baseUrl, data)
}