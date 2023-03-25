 import React, {useState} from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header";
import TodosContainer from "./TodosContainer";
import LoginForm from "./Login";
import LoginButton from "./Loginbutton";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };
  // const [users, setUsers] = useState(null);

  // function handleLogin(users) {
  //   setUsers(users);
  // }

  // const handleLogout = () => {
  //   setUsers(null);
  // };

  return (
    // <Router>
    //   <div className="App">
    //     <Header user={users} onLogout={handleLogout} />
    //     <Routes>
    //       <Route path="/login">
    //         <Login onLogin={handleLogin} />
    //       </Route>
    //       <Route path="/">
    //         <h1>
    //           <center>todos</center>
    //         </h1>
    //         <TodosContainer />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      <div>
      <h1><center>todos</center></h1>
      {showLoginForm ? (
        <LoginForm/>
      ) : (
        <LoginButton onClick={handleLoginButtonClick}/>
      )}
      </div>
      <div>
        <TodosContainer />
      </div>
    </div>
  );
}

export default App;
