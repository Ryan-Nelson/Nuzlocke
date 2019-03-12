import React, { Component } from "react";


export default class MovieForm extends Component {
  // Setting the initial state
  state = {
    movieName: "",
    leadActor: "",
    yearReleased: "",
    id: "",
    dateOfEntry: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating movie object, and
        invoking the function reference passed from parent component
     */
  constructNewMovie = evt => {
    evt.preventDefault();
    if (this.state.movie === "") {
      window.alert("Please select a movie");
    } else {
      const movie = {
        userId:parseInt(sessionStorage.getItem('credentials')),
        id: this.state.id,
        movieName: this.state.movieName,
        leadActor: this.state.leadActor,
        yearReleased: this.state.yearReleased,
        dateOfEntry: Math.floor(Date.now() / 1000)
      };

      // Create the movie and redirect user to the movie list
      this.props
        .addMovie(movie)
        .then(() => this.props.history.push("/movies"));
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.dateOfEntry}
        <form className="movieForm">
          <div className="form-group">
            <label htmlFor="movieName">Movie Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="movieName"
              placeholder="movie name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Lead Actor">Lead Actor</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="leadActor"
              placeholder="lead actor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="year released">Year Released</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="yearReleased"
              placeholder="year released"
            />

          </div>
          <button
            type="submit"
            onClick={this.constructNewMovie}
            className="btn btn-primary"
          >
            Save Movie
          </button>
        </form>
      </React.Fragment>
    );
  }
}