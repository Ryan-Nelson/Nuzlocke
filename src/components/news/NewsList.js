import React, { Component } from 'react'
import "./NewsList.css"
import NewsCard from './NewsCard';

class NewsList extends Component {


    render() {
        return (
            <React.Fragment>
            <div className="centerChildren">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/news/new")}
                        }>
                    New News
                </button>
            </div>
            <article className="news">
                {
                    this.props.news.map(News =>
                        <NewsCard key={`News-${News.id}`}
                            News={News}
                            removeNews={this.props.removeNews}
                            history={this.props.history}
                            />
                    )
                }
            </article>
            <div className="centerChildren">
                <button onClick={ () => this.props.loadNews() }>
                    Reload News
                </button>
            </div>
            </React.Fragment>
        )
    }
}

export default NewsList