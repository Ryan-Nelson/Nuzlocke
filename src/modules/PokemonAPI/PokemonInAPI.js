import PokemonSettings from "./PokemonSettings";
// {
//   "count": 964,
//   "next": null,
//   "previous": null,
//   "results": [
//       {
//           "name": "bulbasaur",
//           "url": "https://pokeapi.co/api/v2/pokemon/1/"
//       }


export default {
    // getPokemon(id) {
    //     return fetch(`${pokemon}`).then(e => e.json());
    // },
    getAllPokemon() {
        return fetch(`${PokemonSettings.remoteURL}/pokemon/?limit=964`).then(e => e.json());
    }
};