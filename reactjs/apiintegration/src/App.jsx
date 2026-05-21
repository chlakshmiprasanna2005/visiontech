import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((r) => r.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch todos.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (todo) => setTodos((prev) => [todo, ...prev]);
  const handleDelete = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));
  const handleEdit = (id, title) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title } : t)));
  const handleToggle = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

  if (loading) return <h2>Loading…</h2>;
  if (error) return <h2>{error}</h2>;

  const done = todos.filter((t) => t.completed).length;

  return (
    <div className="app">
      <div className="header">
        <h1>My Tasks</h1>
        <span>
          {done}/{todos.length} done
        </span>
      </div>

      <AddTodo onAdd={handleAdd} />

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No tasks yet. Add one above.</p>
        ) : (
          todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={i}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onToggle={handleToggle}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;