import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/users/${id}`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${Settings.remoteURL}/users/${id}`, {
      method: "DELETE"
    }).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/users`).then(e => e.json())
  },
  addUser(obj) {
    return fetch(`${Settings.remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  searchUP(username, password) {
    return fetch(
      `${Settings.remoteURL}/users?username=${username}&password=${password}`
    ).then(e => e.json())
  },
  searchUsername(username) {
    return fetch(`${Settings.remoteURL}/users?username=${username}`).then(e =>
      e.json()
    )
  }
}
