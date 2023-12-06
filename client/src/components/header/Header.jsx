import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export function Header() {
    const { name } = useContext(AuthContext)
    
    return (
        <header>
            <h1><a className="home" href="/">GamesPlay</a></h1>
            <h2>Hello, {name}</h2>
            <nav>
                <Link to='/games'>All Games</Link>

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
    )
}