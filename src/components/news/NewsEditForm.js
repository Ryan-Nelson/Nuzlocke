import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"

export default class AnimalEditForm extends Component {
    // Set initial state
    state = {
      newsTitle: "",
      synopsis: "",
      url: "",
      timestamp: "",
      userId: ""
    };


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingNews = evt => {
      evt.preventDefault()

        const editedNews = {
          id: this.props.match.params.id,
          newsTitle: this.state.newsTitle,
          synopsis: this.state.synopsis,
          url: this.state.url,
          timestamp: this.state.timestamp,
          userId: this.state.userId
        };

        this.props.updateNews(editedNews)
            .then(() => this.props.history.push("/news"))
    }
  
    componentDidMount() {
      NewsManager.get(this.props.match.params.newsId)
      .then(News => {
        this.setState({
          newsTitle: News.newsTitle,
          synopsis: News.synopsis,
          url: News.url,
          timestamp: News.timestamp,
          userId: News.userId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="newsForm">
            <div className="form-group">
              <label htmlFor="newsTitle">News Title</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="newsTitle"
                value = {this.state.newsTitle}
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
                value = {this.state.synopsis}
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
                value = {this.state.url}
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
                value = {this.state.timestamp}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userId">userId</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="userId"
                value = {this.state.userId}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingNews}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}