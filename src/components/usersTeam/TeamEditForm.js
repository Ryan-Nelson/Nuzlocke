import React, { Component } from "react"
import TeamManager from "../../modules/TeamManager"
import { Link } from "react-router-dom"

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
          teamLose: team.loes,
          teamDiscretion: team.discretion,
          userId: team.userId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="teamForm">
            <div className="form-group">
              <label htmlFor="teamName">Team name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="teamName"
                value = {this.state.teamName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamWin">team win</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="teamWin"
                value = {this.state.teamWin}
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamLose">team loes</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="teamLose"
                value = {this.state.teamLose}
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamDiscretion">team discretion</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="teamDiscretion"
                value = {this.state.teamDiscretion}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingTeam}
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