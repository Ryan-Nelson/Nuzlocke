import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    pokemonInDatabase: ""

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
    if (this.state.pokemonInDatabase === "") {
      window.alert("Plese seclect your pokemon");
    } else if (this.state.pokemonTeamId === "") {
      window.alert("Plese seclect your Team");
      // } else if (this.state.totalNumberOfpokemonOnTeam === null){
      //   (this.state.totalNumberOfpokemonOnTeam = 0)
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
        userId: parseInt(sessionStorage.getItem('credentials')),
        pokemonTeamId: parseInt(this.state.pokemonTeamId),
        pokemonInDatabase: this.state.pokemonInDatabase
      }

      console.log("new pokemon", pokemon)
      // Create the animal and redirect user to animal list
      this.props
        .addPokemons(pokemon)
        .then(() => this.props.history.push("/"));
    }
  }




  render() {
    console.log(this.props.pokemonData)
    return (
      <React.Fragment>
        <Form>
          <Col md={2}>
          <FormGroup>
            <Label for="pokemonInDatabase">Assign a pokemon</Label>
            <Input
            type="select"
              defaultValue=""
              name="pokemonInDatabase"
              id="pokemonInDatabase"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Team</option>
              {this.props.pokemonData.map(pokemonAPIList => (
                <option key={pokemonAPIList.index} value={pokemonAPIList.url}>
                  {pokemonAPIList.name}
                </option>
              ))}
            </Input>
          </FormGroup>
          </Col>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="pokemonName">Pokemon name</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonName"
                  value={this.state.pokemonName} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="pokemonNickName">Pokemon NickName</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonNickName"
                  value={this.state.pokemonNickName} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
          <Col md={3}>
            <Label for="pokemonLevel">Pokemon Level</Label>
            <Input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="pokemonLevel"
              value={this.state.pokemonLevel} />
              </Col>
          </FormGroup>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="pokemonAttack">Pokemon Attack</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonAttack"
                  value={this.state.pokemonAttack}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="pokemonDefence">Pokemon defence</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonDefence"
                  value={this.state.pokemonDefence}
                />
              </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="pokemonSpecialAttack">Pokemon Special Attack</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonSpecialAttack"
                  value={this.state.pokemonSpecialAttack} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="pokemonSpecialDefense">Pokemon Special Defense</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonSpecialDefense"
                  value={this.state.pokemonSpecialDefense}
                />
              </FormGroup>
            </Col>
            </Row>
            <Col md={3}>
              <FormGroup>
                <Label for="pokemonSpeed">Pokemon Speed</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonSpeed"
                  value={this.state.pokemonSpeed}
                />
              </FormGroup>
            </Col>
          <Col md={2}>
          <FormGroup>
            <Label for="pokemonTeamId">Assign to a Team</Label>
            <Input
            type="select"
            defaultValue=""
            name="Team"
            id="pokemonTeamId"
            onChange={this.handleFieldChange}
            >
              <option value="">Select a Team</option>
              {this.props.teams.filter(team => team.userId === this.props.activeUser.id).map(team => (
                <option key={team.id} id={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </Input>
          </FormGroup>
          </Col>
          <Row>
            
            <button
            type="submit"
            onClick={this.constructNewTeam}
            className="btn btn-primary"
          >
            Submit
          </button>
          <Link className="btn btn-danger" to={`/`}>cancel</Link>
          </Row>
          </Form>
        </React.Fragment>

    );
  }
}

