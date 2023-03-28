import {  useState } from "react";

function TodoInput() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority,  setPriority] = useState("");
    const[due_date, setDue_date] = useState("");
    const [id, setId] = useState ("")

   function handleSubmit (e)  {
      e.preventDefault();

      const newTodo = {id, title, description, priority, due_date};

      fetch ("https://task-train-api.onrender.com", {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newTodo) 
      } ).then(() => {
        console.log("response")
      })
   }

   return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" key={setId}>
        <input type="text" name="Title" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
          <input type="date" name="date" value={due_date} onChange={(event) => setDue_date(event.target.value)}/>
          <input type="text" name="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
          <input type="number" name="priority" placeholder="Priority 1-10" step = "1" value={priority} onChange={(event) => setPriority(event.target.value)}/>
          
        </div>
       <center> <button className="todo" type="submit" onClick={handleSubmit}>
          Add A Todo  
        </button></center>
      </form>
    </div>
   );
    

  };

export default TodoInput;
