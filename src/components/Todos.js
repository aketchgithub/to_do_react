import { useEffect, useState } from "react";

function Todos() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("https://task-train-api.onrender.com");
      const tasks = await res.json();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleUpdate = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <div className="ui celled stripped padded table">
      <table>
        <thead>
          <tr>
            <th>
              <h3 className="ui center aligned header">Title</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Due Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Priority</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Actions</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.dueDate}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <button onClick={() => handleUpdate(task.id, { completed: !task.completed })}>
                  {task.completed ? "Mark as incomplete" : "Mark as complete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todos;

