import { useEffect, useState } from "react"
import LatestGames from "../latestGames/LatestGames"
import * as gameSrvice from "../../services/gameService"

export function Home() {
    const [games, setGames] = useState([])
    useEffect(() => {
        gameSrvice.getAll().then(setGames)
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {games.length > 0 && games.map(game => (
                    <LatestGames
                        key={game._id}
                        game={game}
                    />
                )
                )}
                {games.length == 0 && <p className="no-articles">No games yet</p>}
            </div>
        </section>
    )
}