import React, { Component } from "react";
import { Link } from "react-router-dom"
// import PokemonInAPI from "../../modules/PokemonAPIList/PokemonInAPI"
// getAllPokemonInapi

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
    pokemonSpeed: "",
    userId: "",
    pokemonTeamId: "",
    pokemonInDatabase: "",
    totalNumberOfpokemonOnTeam: ""
    
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
    if (this.state.totalNumberOfpokemonOnTeam === 7) {
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
        speed: this.state.pokemonSpeed,
        userId:parseInt(sessionStorage.getItem('credentials')),
        pokemonTeamId: parseInt(this.state.pokemonTeamId),
        pokemonInDatabase: parseInt(this.state.pokemonInDatabase),
        totalNumberOfpokemonOnTeam: parseInt(this.state.totalNumberOfpokemonOnTeam)
      }
      

      // Create the animal and redirect user to animal list
      this.props
        .addPokemons(pokemon)
        .then(() => this.props.history.push("/pokemonList"));
    }
  }
  


  render() {

    return (
      <React.Fragment>
        <form className="teamForm">
        <div className="form-group">
            <label htmlFor="pokemonInDatabase">Assign a pokemon</label>
            <select
              defaultValue=""
              name="pokemonInDatabase"
              id="pokemonInDatabase"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Team</option>
              {this.props.pokemonData.map(pokemonAPIList => (
                <option key={pokemonAPIList.id} id={pokemonAPIList.id} value={pokemonAPIList.id}>
                  {pokemonAPIList.name}
                </option>
              ))}
            </select>
          </div>
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
            {/* <div className="form-group">
              <input
                type="hidden"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="totalNumberOfpokemonOnTeam"
                value = {(this.state.totalNumberOfpokemonOnTeam) + 1}
              />
            </div> */}
            <div className="form-group">
            <label htmlFor="pokemonTeamId">Assign to a Team</label>
            <select
              defaultValue=""
              name="Team"
              id="pokemonTeamId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Team</option>
              {this.props.teams.map(team => (
                <option key={team.id} id={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewTeam}
            className="btn btn-primary"
          >
            Submit
          </button>
          <Link className="btn btn-danger" to={`/`}>cancel</Link>
        </form>
      </React.Fragment>
    );
  }
  }