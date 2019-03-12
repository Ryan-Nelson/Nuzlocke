import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/news/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/news/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/news`).then(e => e.json());
    },
    addNews(newNews) {
        return fetch(`${Settings.remoteURL}/news`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newNews)
        }).then(data => data.json())
    },
    // getSessionStorage{

    // }
    // sessionStorage.setItem("credentials", parseInt(user.id))
    updateNews(editedNews) {
        return fetch(`${Settings.remoteURL}/news/${editedNews.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedNews)
        }).then(data => data.json());
    }
};
