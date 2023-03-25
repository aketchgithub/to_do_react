import { useState } from "react";

function Login({onLogin}) {
    const [username, setUsername] = useState("");

    function handleSubmit (e)  {
    e.preventDefault();
    // onLogin(username);
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username}),
    }).then((r) => {
        if (r.ok){
            r.json().then((user) => onLogin(user));
        }
    });
    }

return (
    <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="username">Username: </label>
        <input 
        type="text" 
         id="username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Login</button>


    </form>
);

}

export default Login;