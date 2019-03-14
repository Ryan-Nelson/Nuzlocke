import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/teams/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/teams/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/teams`).then(e => e.json());
    },
    addTeams(newTeam) {
        return fetch(`${Settings.remoteURL}/teams`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTeam)
        }).then(data => data.json())
    },
    updateTeam(editedTeam) {
        return fetch(`${Settings.remoteURL}/teams/${editedTeam.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedTeam)
        }).then(data => data.json());
    }
};
