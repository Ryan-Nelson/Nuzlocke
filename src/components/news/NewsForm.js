import React, { Component } from "react";
import moment from "moment"

export default class NewsForm extends Component {
  // Set initial state
  state = {
    newsTitle: "",
    synopsis: "",
    url: "",
    timestamp: "",
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
  constructNewNews = evt => {
    evt.preventDefault()
    const News = {
      id: this.props.match.params.id,
      newsTitle: this.state.newsTitle,
      synopsis: this.state.synopsis,
      url: this.state.url,
      timestamp: this.state.timestamp,
      userId:parseInt(sessionStorage.getItem('credentials'))
    }

    // Create the animal and redirect user to animal list
    this.props
      .addNews(News)
      .then(() => this.props.history.push("/news"));
  }


  render() {

    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="newsTitle">News Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="newsTitle"
              placeholder="News Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
              placeholder="synopsis"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">url</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              placeholder="url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="timestamp">timestamp</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="timestamp"
              placeholder="timestamp"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewNews}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    )
  }
}