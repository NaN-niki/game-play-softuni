import * as request from "../lib/reuest"

const baseUrl = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    return result
}

export const create = async (data) => {
    return await request.post(baseUrl, data)
}

export const getOne = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`)
    return result
}

export const deleteGame = (id) => request.del(`${baseUrl}/${id}`)

export const editGame = (id, data) => request.put(`${baseUrl}/${id}`, data)