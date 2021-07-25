export async function fetchTasks() {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
  return data;
}

export async function fetchTask(id) {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();
  return data;
}

export function createTask(task) {
  return fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

export function deleteTask(id) {
  return fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });
}

export function updateTask(id, data) {
  return fetch(`http://localhost:5000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
