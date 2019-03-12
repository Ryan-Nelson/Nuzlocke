import React, { Component } from "react"
import TeamManager from "../../modules/TeamManager"

export default class TeamEditForm extends Component {
    // Set initial state
    state = {
      teamName: "",
      teamWin: "",
      teamLose: "",
      teamDiscretion: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTeam = evt => {
      evt.preventDefault()

        const editedTeam = {
          id: this.props.match.params.teamId,
          name: this.state.teamName,
          win: this.state.teamWin,
          loes: this.state.teamLose,
          discretion: this.state.teamDiscretion
        };

        this.props.updateTeam(editedTeam)
            .then(() => this.props.history.push("/teams"))
    }
  

    componentDidMount() {
      TeamManager.get(this.props.match.params.teamId)
      .then(team => {
        this.setState({
          teamName: team.name,
          win: team.win,
          loes: team.loes,
          discretion: team.teamDiscretion
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
              <label htmlFor="teamLoes">team loes</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="teamLoes"
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
          </form>
        </React.Fragment>
      );
    }
}