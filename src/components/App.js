import TodosContainer from "./TodosContainer";
function App() {

  return(
     <div className="todo">
      <div className="header">
        <h1><center>todos</center></h1>
      </div>
      <TodosContainer />

     </div>
  );
}

export default App;