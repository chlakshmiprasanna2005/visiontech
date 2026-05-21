import { useState } from "react";

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim(), completed: false }),
      });
      const data = await res.json();
      onAdd({ ...data, id: Date.now() });
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a new task…"
      />
      <button onClick={handleAdd}>+ Add</button>
    </div>
  );
}

export default AddTodo;