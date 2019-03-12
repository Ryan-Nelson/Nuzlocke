const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/movies/${id}`).then(e => e.json())
  },
  
  getAll() {
    return fetch(`${remoteURL}/movies`).then(e => e.json())
  },
  removeAndList(id) {
    return fetch(`http://localhost:8088/movies/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:8088/movies`))
        .then(e => e.json())
  },
  post(newMovie) {
    return fetch(`${remoteURL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMovie)
    }).then(data => data.json())
  },
  put(editedMovie) {
    return fetch(`${remoteURL}/movies/${editedMovie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMovie)
    }).then(data => data.json());
  }
}
