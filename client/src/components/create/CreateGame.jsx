import { useNavigate } from "react-router-dom"
import * as gameService from "../../services/gameService"
import { useState } from "react"

export function CreateGame() {
    const navigate = useNavigate()
    const { errors, setErrors } = useState()

    const createGameHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const gameData = Object.fromEntries(formData.entries())

        try {
            await gameService.create(gameData)
            navigate('/games')
        } catch (error) {
            setErrors(errors => ({ ...errors, serverError: error.message }))
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createGameHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>

                    {errors.serverError && <p style={{ color: 'red', margin: '2em' }}>{errors.serverError}</p>}
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}