import React, { Component } from "react"

import PokemonCard from "../usersPokemon/PokemonCard"


export default class TeamDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const team = this.props.teams.find(team =>
            team.id === parseInt(this.props.match.params.teamsId))
             || {id:404, name:"404", discretion: "Dog not found"}

        return (
            <section className="team">
                <div key={team.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {team.name}
                                <article className="pokemons">
                                    {
                                    this.props.pokemons.map(pokemon =>
                                    <PokemonCard key={`pokemon-${pokemon.id}`}
                                        pokemon={pokemon}
                                        history={this.props.history}
                                    />
                                )}
                                </article>
                                
                            <div>{team.win}</div>
                            <div>{team.lose}</div>
                            <div>{team.discretion}</div>
                        </h4>
                        <button
                            onClick={() =>
                                this.props.deleteThisTeam(team.id)
                                    .then(() => this.props.history.push("/"))
                            }
                            className="card-link">Delete Your Team</button>
                    </div>
                </div>
            </section>
        )
    }
}