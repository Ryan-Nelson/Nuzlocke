import React, { Component } from "react"



export default class News extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const News = this.props.news.find(a =>
            a.id === parseInt(this.props.match.params.newsId))
             || {id:404, newsTitle:"404", synopsis: "Dog not found"}

        return (
            <section className="news">
                <div key={News.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {News.newsTitle}
                        </h4>
                        <h6 className="card-title">{News.url}</h6>
                        <h5 className="card-title">{News.timeStamp}</h5>
                        <h5 className="card-title">{News.synopsis}</h5>
                        <button
                            onClick={() =>
                                this.props.removeNews(News.id)
                                    .then(() => this.props.history.push("/news"))
                            }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}