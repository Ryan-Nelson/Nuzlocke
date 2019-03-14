import React, { Component } from "react";

export default class PokemonForm extends Component {
  // Set initial state
  state = {
    pokemonOnTheTeam: "",
    pokemonName: "",
    pokemonNickName: "",
    pokemonLevel: "",
    pokemonAttack: "",
    pokemonDefence: "",
    pokemonSpecialAttack: "",
    pokemonSpecialDefense: "",
    pokemonSpeed: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewTeam = evt => {
    evt.preventDefault()
    if (this.state.pokemonOnTheTeam === 7) {
      window.alert("Pokemon Rules Say only 6 max at a time");
    } else {

      const pokemon = {
        id: this.props.match.params.pokemonId,
        name: this.state.pokemonName,
        nickName: this.state.pokemonNickName,
        level: this.state.pokemonLevel,
        attack: this.state.pokemonAttack,
        defence: this.state.pokemonDefence,
        specialAttack: this.state.pokemonSpecialAttack,
        specialDefense: this.state.pokemonSpecialDefense,
        speed: this.state.pokemonSpeed
      }

      // Create the animal and redirect user to animal list
      this.props
        .addPokemon(pokemon)
        .then(() => this.props.history.push("/pokemonList"));
    }
  }
  

  render() {
    return (
      <React.Fragment>
        <form className="teamForm">
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
            onClick={this.constructNewTeam}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}