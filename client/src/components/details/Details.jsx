import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gameService from '../../services/gameService'
import * as commentsService from '../../services/commentService'
import { AuthContext } from "../../contexts/authContext"

export function GameDetails() {
    const { id } = useParams()
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])
    const { isAuthenticated, _id, username } = useContext(AuthContext)

    useEffect(() => {
        gameService.getOne(id).then(setGame)
        commentsService.getAllByGame(id).then(setComments)
    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        const newComment = await commentsService.createComment(id, comment)
        newComment.ownerUsername = username
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
                                <p>{c.ownerUsername || c.owner.username}: {c.text}</p>
                            </li>
                        ))}

                    </ul>
                    {comments.length == 0 && <p className="no-comment">No comments.</p>}
                </div>

                {_id == game._ownerId &&
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                }
            </div>

            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {isAuthenticated == true && _id !== game._ownerId &&
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={addCommentHandler}>
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            }

        </section>
    )
}