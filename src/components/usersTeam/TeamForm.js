import React, { Component } from "react";
import TeamManager from "../../modules/TeamManager"
import { Link } from "react-router-dom"


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
        userId:parseInt(sessionStorage.getItem('credentials'))
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
              <label htmlFor="teamLose">team lose</label>
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