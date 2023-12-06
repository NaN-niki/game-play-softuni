import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export function Header() {
    const authContext = useContext(AuthContext)

    return (
        <header>
            <h1><a className="home" href="/">GamesPlay</a></h1>
            {authContext.isAuthenticated && <h2>Hello, {authContext.username}</h2>}
            
            <nav>
                <Link to='/games'>All Games</Link>

                {authContext.isAuthenticated &&
                    <div id="user">
                        <Link to='/games/create'>Create Games</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>
                }

                {!authContext.isAuthenticated && 
                <div id="guest">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
                }
            </nav>
        </header>
    )
}