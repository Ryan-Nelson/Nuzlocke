import React, { Component } from "react";

export default class TeamForm extends Component {
  // Set initial state
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

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewTeam = evt => {
    evt.preventDefault()

      const team = {
        id: this.props.match.params.teamId,
        name: this.state.teamName,
        win: this.state.teamWin,
        loes: this.state.teamLose,
        discretion: this.state.teamDiscretion,
        userId:parseInt(sessionStorage.getItem('credentials'))
      }

      // Create the animal and redirect user to animal list
      this.props
        .addTeams(team)
        .then(() => this.props.history.push("/teams"));
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