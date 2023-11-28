import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gameService from '../../services/gameService'
import * as commentsService from '../../services/commentService'

export function GameDetails() {
    const { id } = useParams()
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        gameService.getOne(id).then(setGame)
        commentsService.getAllByGame(id).then(setComments)
    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        const username = e.target.username.value
        const newComment = await commentsService.createComment(id, username, comment)
        setComments(comments => [...comments, newComment])
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(c => (
                            <li key={c._id} className="comment">
                            <p>{c.username}: {c.text}</p>
                        </li>
                        ))}
                        
                    </ul>
                    {comments.length == 0 && <p className="no-comment">No comments.</p>}
                </div>

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" id="username" placeholder="Type your username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}