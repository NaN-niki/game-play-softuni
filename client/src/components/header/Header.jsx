import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header>
               
                <h1><a className="home" href="/">GamesPlay</a></h1>
                <nav>
                    <Link to='/catalog'>All Games</Link>
                    
                    <div id="user">
                    <Link to='/games/create'>Create Games</Link>
                    <Link to='/logout'>Logout</Link>
                    </div>
                   
                    <div id="guest">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}