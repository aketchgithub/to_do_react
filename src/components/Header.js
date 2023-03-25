import { Link } from "react-router-dom";

function Header( {user, onLogout }) {
    function handleLogout() {
        onLogout();
        fetch("http://localhost:3000/tasks", {
            method: "DELETE",
        }).then(()=> onLogout()); 
    }

    return (
        <header>
            <Link to="/">
                Your Todo List
            </Link>
            { user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/login"> Login</Link>
            )}
        </header>
    );
}

export default Header;