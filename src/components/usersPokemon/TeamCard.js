import React, { Component } from 'react'
import { Link } from "react-router-dom"

class TeamCard extends Component {


    render() {
        
        return (
            <React.Fragment>
                <div key={this.props.team.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div>{this.props.team.name}</div>
                            <div>{this.props.pokemon.name}</div>
                            <div>{this.props.pokemon.nickName}</div>
                            <div>{this.props.pokemon.level}</div>
                            <div>{this.props.pokemon.attack}</div>
                            <div>{this.props.pokemon.defence}</div>
                            <div>{this.props.pokemon.specialAttack}</div>
                            <div>{this.props.pokemon.specialDefense}</div>
                            <div>{this.props.pokemon.speed}</div>
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

export default TeamCard