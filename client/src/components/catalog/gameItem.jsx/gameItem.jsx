import { Link } from "react-router-dom";

export function GameItem({data}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={data.imageUrl} />
                <h6>{data.category}</h6>
                <h2>{data.title}</h2>
                <Link to={`/games/${data._id}/details`} className="details-button">Details</Link>
                <a href="#" >Details</a>
            </div>
        </div>
    )
}