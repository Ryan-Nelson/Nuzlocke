import React, { Component } from 'react'
import TeamCard from './TeamCard';

export default class TeamList extends Component {

    render() {

        return (
            <React.Fragment>
            <div className="centerChildren">
            {/* new team button */}
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/newTeam")}
                        }>
                    Make New Team
                </button>
            </div>
            <article className="teams">
                {
                    this.props.teams.map(team =>
                        <TeamCard key={`team-${team.id}`}
                            team={team}
                            pokemons={this.props.pokemons}
                            deleteThisTeam={this.props.deleteThisTeam}
                            history={this.props.history}
                            />
                    )
                }
            </article>
            <div className="centerChildren">
            {/* button to refresh the teams */}
                <button onClick={ () => this.props.loadTeams() }>
                    Reload Teams
                </button>
            </div>
            </React.Fragment>
        )
    }
}
