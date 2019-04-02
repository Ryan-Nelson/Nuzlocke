import React, { Component } from "react";
import TeamManager from "../../modules/TeamManager"
import { Link } from "react-router-dom"
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ChampionShirona from "./ChampionShirona.mp3"
import Sound from "@platoai/react-sound"

export default class TeamForm extends Component {
  // Set initial state for teams
  state = {
    teamName: "",
    teamWin: "",
    teamLose: "",
    teamDiscretion: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }


  constructNewTeam = evt => {
    evt.preventDefault()
    // set the props to team
    const team = {
      id: this.props.match.params.teamId,
      name: this.state.teamName,
      win: this.state.teamWin,
      lose: this.state.teamLose,
      discretion: this.state.teamDiscretion,
      userId: parseInt(sessionStorage.getItem('credentials'))
    }

    // Create the team and redirect user to team list
    this.props
      .addTeams(team)
      .then(() => this.props.history.push("/"));
  }

  // // checks to see if team list is display
  // componentDidMount() {
  //   TeamManager.get(this.props.match.params.id)
  //   .then(team => {
  //     this.setState({
  //       teamName: team.name,
  //       teamWin: team.win,
  //       teamLose: team.lose,
  //       teamDiscretion: team.discretion
  //     });
  //   });
  // }



  render() {
    return (
      <React.Fragment>
        {/* the teams form */}
        <Sound
   url={ChampionShirona}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="teamName">Team name</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="teamName"
                  value={this.state.teamName} />
              </FormGroup>
            </Col>
          </Row>
          <Col md={3}>
            <FormGroup>
              <Label for="teamDiscretion">team discretion</Label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="teamDiscretion"
                value={this.state.teamDiscretion}
              />
            </FormGroup>
          </Col>
          <Row>
              <Col md={3}>
            <FormGroup>
                <Label for="teamWin">team win</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="teamWin"
                  value={this.state.teamWin} />
            </FormGroup>
              </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="teamLose">team lose</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="teamLose"
                  value={this.state.teamLose}
                />
              </FormGroup>
            </Col>
          </Row>
          <button
            type="submit"
            onClick={this.constructNewTeam}
            className="btn btn-primary"
          >
            Submit
          </button>
          <Link className="btn btn-danger" to={`/`}>cancel</Link>

        </Form>
      </React.Fragment>
    );
  }
}