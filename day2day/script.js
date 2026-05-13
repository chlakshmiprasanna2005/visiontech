// ── DOM refs ──────────────────────────────────────────────
const input     = document.querySelector("#todo-input");
const addBtn    = document.querySelector("#add-btn");
const todoList  = document.querySelector("#todo-list");
const emptyEl   = document.querySelector("#empty-state");
const clearBtn  = document.querySelector("#clear-btn");
const statTotal = document.querySelector("#stat-total");
const statDone  = document.querySelector("#stat-done");
const statLeft  = document.querySelector("#stat-left");

// ── State ─────────────────────────────────────────────────
let todos  = [];
let filter = "all"; // "all" | "active" | "completed"

// ── Add ───────────────────────────────────────────────────
const addTodo = () => {
  const text = input.value.trim();
  if (text === "") return;

  todos.push({ id: Date.now(), text, completed: false });
  input.value = "";
  render();
};

// ── Delete ────────────────────────────────────────────────
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  render();
};

// ── Toggle ────────────────────────────────────────────────
const toggleTodo = (id) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  render();
};

// ── Render ────────────────────────────────────────────────
const render = () => {
  todoList.innerHTML = "";

  // apply current filter
  const visible = todos.filter((t) => {
    if (filter === "active")    return !t.completed;
    if (filter === "completed") return  t.completed;
    return true;
  });

  // update stats
  const doneCount = todos.filter((t) => t.completed).length;
  statTotal.textContent = todos.length;
  statDone.textContent  = doneCount;
  statLeft.textContent  = todos.length - doneCount;

  // show / hide clear button
  clearBtn.classList.toggle("show", doneCount > 0);

  // show / hide empty state
  emptyEl.classList.toggle("show", visible.length === 0);

  // build each todo item
  visible.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");

    // custom checkbox wrapper
    const checkWrap = document.createElement("label");
    checkWrap.className = "check-wrap";

    const checkbox = document.createElement("input");
    checkbox.type    = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const checkBox = document.createElement("span");
    checkBox.className = "check-box";
    checkBox.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path d="M1.5 5L4.5 8L10.5 1.5" stroke="#0e0e11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    checkWrap.appendChild(checkbox);
    checkWrap.appendChild(checkBox);

    // task text
    const span = document.createElement("span");
    span.className   = "todo-text";
    span.textContent = todo.text;

    // delete button
    const delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;
    delBtn.setAttribute("aria-label", "Delete task");
    delBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(checkWrap);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
};

// ── Filter tabs ───────────────────────────────────────────
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

// ── Clear completed ───────────────────────────────────────
clearBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  render();
});

// ── Event listeners ───────────────────────────────────────
addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

// ── Initial render ────────────────────────────────────────
render();