export function GameItem({data}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={data.imageUrl} />
                <h6>{data.category}</h6>
                <h2>{data.title}</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>
    )
}