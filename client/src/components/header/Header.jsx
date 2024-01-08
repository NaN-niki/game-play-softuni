import { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext";

export function Header() {
    const { isAuthenticated, username } = useContext(AuthContext)

    return (
        <header>
            <h1><a className="home" href="/">GamesPlay</a></h1>
            {isAuthenticated && <h2>Hello, {username}</h2>}

            <nav>
                <Link to='/games'>All Games</Link>

                {isAuthenticated &&
                    <div id="user">
                        <Link to='/games/create'>Create Games</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>
                }

                {!isAuthenticated &&
                    <div id="guest">
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                }
            </nav>
        </header>
    )
}