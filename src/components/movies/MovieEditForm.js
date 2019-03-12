import React, { Component } from "react"
import MovieManager from "../../modules/MovieManager"

export default class MovieEditForm extends Component {
    // Set initial state
    state = {
      movieName: "",
      leadActor: "",
      yearReleased: "",
      dateofEntry: "",
      id: "",
      userId: parseInt(sessionStorage.getItem("credentials"))
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingMovie = evt => {
      evt.preventDefault()

      if (this.state.movieName === "") {
        window.alert("Please select a Movie");
      } else {
        const editedMovie = {
          id: this.props.match.params.movieId,
          movieName: this.state.movieName,
          leadActor: this.state.leadActor,
          yearReleased: this.state.yearReleased,
          dateofEntry: this.state.dateofEntry,
          userId: parseInt(sessionStorage.getItem("credentials"))
        };

    this.props.updateMovie(editedMovie)
    .then(() => this.props.history.push("/movies"))

    }
  }

    componentDidMount() {

     MovieManager.get(this.props.match.params.movieId)
      .then(movie => {
        console.log(movie)
        this.setState({
          movieName: movie.movieName,
          leadActor: movie.leadActor,
          userId: movie.userId,
          yearReleased: movie.yearReleased,
          id: movie.id,
          dateofEntry: movie.dateofEntry
        });
      });

    }


    render() {
      return (
        <React.Fragment>
          <form className="movieForm">
            <div className="form-group">
              <label htmlFor="movieName">movie name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="movieName"
                value = {this.state.movieName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="leadActor">Lead Actor</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="leadActor"
                value = {this.state.leadActor}
              />
            </div>
            <div>
              <label htmlFor="yearReleased">Year Released</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="yearReleased"
                value = {this.state.yearReleased}
              />
            </div>


            <button
              type="submit"
              onClick={this.updateExistingMovie}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}