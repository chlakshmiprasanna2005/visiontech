import { useState } from "react";

function TodoItem({ todo, index, onDelete, onEdit, onToggle }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  const handleSave = async () => {
    if (!draft.trim()) return;
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...todo, title: draft.trim() }),
      });
      onEdit(todo.id, draft.trim());
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: "DELETE",
      });
      onDelete(todo.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`todo-item ${editing ? "editing" : ""} ${todo.completed ? "done" : ""}`}
    >
      <span className="todo-num">#{String(index + 1).padStart(2, "0")}</span>

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {editing ? (
        <input
          className="edit-input"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") setEditing(false);
          }}
        />
      ) : (
        <span className="todo-title">{todo.title}</span>
      )}

      <div className="actions">
        {editing ? (
          <button onClick={handleSave}>✓ Save</button>
        ) : (
          <button
            onClick={() => {
              setEditing(true);
              setDraft(todo.title);
            }}
          >
            ✎ Edit
          </button>
        )}
        <button onClick={handleDelete}>✕ Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;