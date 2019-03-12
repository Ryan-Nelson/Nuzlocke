import React, { Component } from 'react'
import { Link } from "react-router-dom"


class NewsCard extends Component {

    render() {

        return (
            <React.Fragment>
                <div key={this.props.News.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div>{this.props.News.newsTitle}</div>
                            <div>{Date.now()}</div>
                            <div>{this.props.News.synopsis}</div>
                            <div>{this.props.News.url}</div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/news/${this.props.News.id}/edit`);
                                }}
                                >
                                Edit
                            </button>

                            {
                                (this.props.hasOwnProperty("removeNews"))
                                    ? <button
                                        onClick={() => this.props.removeNews(this.props.News.id)}
                                        className="card-link">Delete</button>
                                    : null
                            }

                        </h5>
                    </div>
                    <Link className="nav-link" to={`/news/${this.props.News.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

export default NewsCard