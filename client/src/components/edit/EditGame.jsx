import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as gameService from "../../services/gameService"

export default function EditGame() {
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    })
    //ako sa undefined ili null po nachalo ima warning che ot nekontrolirana otivame v kontrolirna forma
    const { id } = useParams()
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        gameService.getOne(id).then(setGame)
    }, [id])

    const editHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const values = Object.fromEntries(formData.entries())
        const data = {
            title: values.title,
            category: values.category,
            maxLevel: values.maxLevel,
            imageUrl: values.imageUrl,
            summary: values.summary
        }
        try {
            await gameService.editGame(id, data)
            navigate(`/games/${id}/details`)
        } catch (error) {
            setErrors(e => ({ ...e, serverError: error.message }))
        }
    }
    const changeHandler = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return <>
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={game.title} onChange={changeHandler} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={game.category} onChange={changeHandler} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={game.maxLevel} onChange={changeHandler} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={changeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={game.summary} onChange={changeHandler}></textarea>
                    {errors.serverError && <p style={{ color: 'red', margin: '2em' }}>{errors.serverError}</p>}
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    </>
}