import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/tasks/${id}`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${Settings.remoteURL}/tasks/${id}`, {
      method: "DELETE"
    }).then(e => e.json())
  },
  getAll(id) {
    return fetch(`${Settings.remoteURL}/tasks?userId=${id}`).then(e => e.json())
  },
  addTask(obj) {
    return fetch(`${Settings.remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  searchTask(taskName) {
    return fetch(`${Settings.remoteURL}/tasks?taskName=${taskName}`).then(e =>
      e.json()
    )
  },
  getDone() {
    return fetch(`${Settings.remoteURL}/tasks?taskComplete='true'`).then(e => e.json())
  },
  updateTask(task){
    return fetch(`${Settings.remoteURL}/tasks/${task.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
  }
}
