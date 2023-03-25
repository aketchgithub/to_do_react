import { useState, useEffect } from "react";


import TodosContainer from "./TodosContainer";
import Login from "./Login";
function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000")
    .then((response) => {
      if (response.ok) {
        response.json().then((users) =>setUsers(users));
      }
    });
  }, []);


  return(
     <div className="todo">
      <div className="header">
        <h1><center>todos</center></h1>
      </div>
      <Login/>
      <TodosContainer />

     </div>
  );
}

export default App;