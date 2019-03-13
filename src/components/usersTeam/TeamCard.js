import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PokemonCard from '../usersPokemon/PokemonCard';

export default class TeamCard extends Component {


    render() {

        return (
            <React.Fragment>
                <div key={this.props.team.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div>{this.props.team.name}</div>
                                {/* <div key={this.props.pokemons.id} className="pokemonCards"> */}
                                <article className="pokemons">
                                <div>{this.pokemons.name}</div>
                                    {
                                this.props.pokemons.map(pokemons =>
                                    <PokemonCard key={`pokemon-${pokemons.id}`}
                                        pokemons={pokemons}
                                        deletePokemon={this.props.deletePokemon}
                                        history={this.props.history}
                                    />
                                )
                                    }
                                </article>
                                {/* </div> */}
                            <div>{this.props.team.win}</div>
                            <div>{this.props.team.lose}</div>
                            <div>{this.props.team.discretion}</div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/teams/${this.props.team.id}/edit`);
                                }}
                            >
                                Edit
                            </button>

                            {
                                (this.props.hasOwnProperty("deleteThisTeam"))
                                    ? <button
                                        onClick={() => this.props.deleteThisTeam(this.props.team.id)}
                                        className="card-link">Delete</button>
                                    : null
                            }

                        </h5>
                    </div>
                    <Link className="nav-link" to={`/teams/${this.props.team.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

