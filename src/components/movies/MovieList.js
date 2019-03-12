import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render () {
    let user = Number(sessionStorage.getItem("credentials"))
      return (
          <React.Fragment>
              <div className="MovieButton">
                  <button type="button"
                          className="btn btn-success"
                          onClick={() => {
                              this.props.history.push("/movies/new")}
                          }>
                      Add a Favorite Movie
                  </button>

              </div>
      <section className="movies">

        {
          // this.props.movies.sort((a,b) => {return b.dateofEntry - a.dateofEntry})


          this.props.movies.filter(mv => mv.userId === user)
          .map(movie =>
            <MovieCard key={movie.id} movie={movie} {...this.props} userId={movie.userId}/>
        )
        }
      </section>
      </React.Fragment>
    )
  }
}
