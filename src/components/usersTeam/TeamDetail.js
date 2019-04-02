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
            || { id: 404, name: "404", discretion: "team not found" }

        return (
            <section className="team">
                <div key={team.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">Name: {team.name}
                            <article className="pokemons">
                                {/* {
                                    this.props.pokemons.map(pokemon =>
                                        <PokemonCard key={`pokemon-${pokemon.id}`}
                                            pokemon={pokemon}
                                            history={this.props.history}
                                        />
                                    )} */}
                                                                        {/* {
                                    this.props.pokemons.filter(pt => pt.pokemonTeamId === this.props.teamid)
                                    .map(pokemon =>
                                    <PokemonCard key={`pokemon-${pokemon.id}`}
                                        pokemon={pokemon}
                                        history={this.props.history}
                                        
                                    />
                                )} */}
                                {/* <div className="centerChildren">
                                    <button type="button"
                                        className="btn btn-success"
                                        onClick={() => {
                                            this.props.history.push("/newPokemon")
                                        }
                                        }>
                                        Add New Pokemon
                                    </button>
                                </div> */}
                            </article>

                            <div>Wins: {team.win}</div>
                            <div>Lose: {team.lose}</div>
                            <div>Discretion: {team.discretion}</div>
                        </h4>
                        <button
                            onClick={() =>
                                this.props.deleteThisTeam(team.id)
                                    .then(() => this.props.history.push("/"))
                            }
                            className="btn btn-warning">Delete Your Team</button>
                    </div>
                </div>
            </section>
        )
    }
}