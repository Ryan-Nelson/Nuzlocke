import React, { Component } from "react"
import PokemonManager from "../../modules/TeamManager"

export default class TeamEditForm extends Component {
    // Set initial state
    state = {
      pokemonName: "",
      pokemonNickName: "",
      pokemonLevel: "",
      pokemonAttack: "",
      pokemonDefence: "",
      pokemonSpecialAttack: "",
      pokemonSpecialDefense: "",
      pokemonSpeed: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingPokemon = evt => {
      evt.preventDefault()

        const editedPokemon = {
          id: this.props.match.params.pokemonId,
          name: this.state.pokemonName,
          nickName: this.state.pokemonNickName,
          level: this.state.pokemonLevel,
          attack: this.state.pokemonAttack,
          defence: this.state.pokemonDefence,
          specialAttack: this.state.pokemonSpecialAttack,
          specialDefense: this.state.pokemonSpecialDefense,
          speed: this.state.pokemonSpeed
        };

        this.props.updatePokemon(editedPokemon)
            .then(() => this.props.history.push("/"))
    }
  

    componentDidMount() {
      PokemonManager.get(this.props.match.params.pokemonId)
      .then(pokemon => {
        this.setState({
          pokemonName: pokemon.name,
          pokemonNickName: pokemon.nickName,
          pokemonLevel: pokemon.level,
          pokemonAttack: pokemon.attack,
          pokemonDefence: pokemon.defence,
          pokemonSpecialAttack: pokemon.specialAttack,
          pokemonSpecialDefense: pokemon.specialDefense,
          pokemonSpeed: pokemon.speed
        });
      });
    }


    render() {

      return (
        <React.Fragment>
          <form className="pokemonForm">
          <div className="form-group">
              <label htmlFor="pokemonName">Pokemon name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonName"
                value = {this.state.pokemonName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pokemonNickName">Pokemon NickName</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonNickName"
                value = {this.state.pokemonNickName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pokemonLevel">Pokemon Level</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonLevel"
                value = {this.state.pokemonLevel}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pokemonAttack">Pokemon Attack</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonAttack"
                value = {this.state.pokemonAttack}
              />
            </div>
        <div className="form-group">
              <label htmlFor="pokemonDefence">Pokemon defence</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonDefence"
                value = {this.state.pokemonDefence}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pokemonSpecialAttack">Pokemon Special Attack</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonSpecialAttack"
                value = {this.state.pokemonSpecialAttack}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pokemonSpecialDefense">Pokemon Special Defense</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonSpecialDefense"
                value = {this.state.pokemonSpecialDefense}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pokemonSpeed">Pokemon Speed</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="pokemonSpeed"
                value = {this.state.pokemonSpeed}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingTeam}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}