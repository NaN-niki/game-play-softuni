import { useEffect, useState } from "react"
import * as userService from '../../services/gameService'
import { GameItem } from "./gameItem.jsx/gameItem"

export function Catalog() {
    const [games, setGames] = useState([])

    useEffect(() => {
        userService.getAll().then(data => {
            setGames(data)
        })
    }, [])

    //umishleno hvurlqne na greshka pri renderiraneto
    // if(Math.random() < 0.5){
    //     throw new Error('Invoked')
    // }
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 && games.map(game => <GameItem key={game._id} data={game}/>)}
           
           {games.length === 0 &&  <h3 className="no-articles">No articles yet</h3>}
        </section>
    )
}