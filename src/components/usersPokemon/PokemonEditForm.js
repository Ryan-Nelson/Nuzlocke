import React, { Component } from "react"
import PokemonManager from "../../modules/PokemonManager"
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom"

export default class PokemonEditForm extends Component {
  // Set initial state
  state = {
    pokemonName: "",
    pokemonNickName: "",
    pokemonLevel: "",
    pokemonAttack: "",
    pokemonDefence: "",
    pokemonSpecialAttack: "",
    pokemonSpecialDefense: "",
    pokemonSpeed: "",
    userId: "",
    pokemonTeamId: ""

  }


  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  // when user click's submit button capture the newly entered data
  updateExistingPokemon = evt => {
    evt.preventDefault()
    const editedPokemon = {
      id: parseInt(this.props.match.params.pokemonsId),
      name: this.state.pokemonName,
      nickName: this.state.pokemonNickName,
      level: this.state.pokemonLevel,
      attack: this.state.pokemonAttack,
      defence: this.state.pokemonDefence,
      specialAttack: this.state.pokemonSpecialAttack,
      specialDefense: this.state.pokemonSpecialDefense,
      speed: this.state.pokemonSpeed,
      userId: this.state.userId,
      pokemonTeamId: parseInt(this.state.pokemonTeamId)

    };

    this.props.updatePokemon(editedPokemon)
      .then(() => this.props.history.push("/"))
  }

  // when Pokemon edit page load's gab the pokemon's stat's
  componentDidMount() {
    PokemonManager.get(this.props.match.params.pokemonsId)
      .then(pokemon => {
        console.log(pokemon)
        this.setState({
          pokemonName: pokemon.name,
          pokemonNickName: pokemon.nickName,
          pokemonLevel: pokemon.level,
          pokemonAttack: pokemon.attack,
          pokemonDefence: pokemon.defence,
          pokemonSpecialAttack: pokemon.specialAttack,
          pokemonSpecialDefense: pokemon.specialDefense,
          pokemonSpeed: pokemon.speed,
          pokemonTeamId: pokemon.pokemonTeamId,
          userId: pokemon.userId
        });
      });
  }


  render() {
    return (
      <React.Fragment>
        {/* update form imputs feilds */}
        <Form>
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
            <Col md={3}>
              <FormGroup>
                <Label for="pokemonTeamId">Pokemon Special Defense</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="pokemonTeamId"
                  value={this.state.pokemonTeamId}
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
              {/* allow user to change their pokemon's current team */}
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

            {/* submit button */}
            <Button
              type="submit"
              onClick={this.updateExistingPokemon}
              className="btn btn-primary"
            >
              Submit
                </Button>

            {/* cancel button */}
            <Link className="btn btn-danger" to={`/`}>cancel</Link>
          </Row>
        </Form>
      </React.Fragment>

    );
  }
}