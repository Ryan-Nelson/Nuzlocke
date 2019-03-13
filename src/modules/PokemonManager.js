import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/pokemons/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/pokemons/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/pokemons`).then(e => e.json());
    },
    addPokemon(newPokemon) {
        return fetch(`${Settings.remoteURL}/pokemons`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPokemon)
        }).then(data => data.json())
    },
    updatePokemon(editedPokemon) {
        return fetch(`${Settings.remoteURL}/pokemons/${editedPokemon.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedPokemon)
        }).then(data => data.json());
    }
};