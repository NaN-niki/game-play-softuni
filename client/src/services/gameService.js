import { request } from "../lib/reuest"

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const create = async (data) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, //v kakuv format prashtame dannite
        body: JSON.stringify(data) //preobrazuvame obekta v josn format
    })

    const result = await response.json()
    return result
}

export const getAll = async () => {
    const result = await request('GET', baseUrl)
    return Object.values(result)
}