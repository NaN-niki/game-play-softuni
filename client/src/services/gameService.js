import { request } from "../lib/reuest"

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const create = async (data) => {
    return await request('POST', baseUrl, data)
}

export const getAll = async () => {
    const result = await request('GET', baseUrl)
    return Object.values(result)
}