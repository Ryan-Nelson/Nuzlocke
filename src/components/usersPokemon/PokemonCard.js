import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class PokemonCard extends Component {


    render() {
        
        return (
            <React.Fragment>
                <div key={this.props.pokemon.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div>{this.props.pokemon.name}</div>
                            <div>{this.props.pokemon.nickName}</div>
                            <div>{this.props.pokemon.level}</div>
                            <div>{this.props.pokemon.attack}</div>
                            <div>{this.props.pokemon.defence}</div>
                            <div>{this.props.pokemon.specialAttack}</div>
                            <div>{this.props.pokemon.specialDefense}</div>
                            <div>{this.props.pokemon.speed}</div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/${this.props.pokemon.id}/edit`);
                                }}
                                >
                                Edit
                            </button>

                            {
                                (this.props.hasOwnProperty("deletePokemon"))
                                    ? <button
                                        onClick={() => this.props.deletePokemon(this.props.pokemon.id)}
                                        className="card-link">Delete</button>
                                    : null
                            }

                        </h5>
                    </div>
                    <Link className="nav-link" to={`/${this.props.pokemon.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}
