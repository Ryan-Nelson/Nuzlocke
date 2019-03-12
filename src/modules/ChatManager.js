import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/chats/${id}`).then(r => r.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/chats?_expand=user`).then(r => r.json())
  },
  addChat(newChat) {
    return fetch(`${Settings.remoteURL}/chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newChat)
    }).then(data => data.json())
  },
  updateChat(editedChat) {
    return fetch(`${Settings.remoteURL}/chats/${editedChat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedChat)
    }).then(data => data.json());
  }
}