import React, { Component } from "react"
import TeamManager from "../../modules/TeamManager"
import { Link } from "react-router-dom"
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class TeamEditForm extends Component {
    // Set initial state
    state = {
      teamName: "",
      teamWin: "",
      teamLose: "",
      teamDiscretion: "",
      userId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTeam = evt => {
      evt.preventDefault()

        const editedTeam = {
          id: parseInt(this.props.match.params.teamsId),
          name: this.state.teamName,
          win: this.state.teamWin,
          lose: this.state.teamLose,
          discretion: this.state.teamDiscretion,
          userId: this.state.userId
        };

        this.props.updateTeam(editedTeam)
            .then(() => this.props.history.push("/"))
    }
  

    componentDidMount() {
      TeamManager.get(this.props.match.params.teamsId)
      .then(team => {
        this.setState({
          teamName: team.name,
          teamWin: team.win,
          teamLose: team.lose,
          teamDiscretion: team.discretion,
          userId: team.userId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
        {/* the teams form */}
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
            onClick={this.updateExistingTeam}
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