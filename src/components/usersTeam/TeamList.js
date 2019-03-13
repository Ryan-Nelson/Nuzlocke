import React, { Component } from 'react'
import TeamCard from './TeamCard';

export default class TeamList extends Component {

    render() {

        return (
            <React.Fragment>
            <div className="centerChildren">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/new")}
                        }>
                    Make New Team
                </button>
            </div>
            <article className="teams">
                {
                    this.props.teams.map(team =>
                        <TeamCard key={`team-${team.id}`}
                            team={team}
                            deleteThisTeam={this.props.deleteThisTeam}
                            history={this.props.history}
                            />
                    )
                }
            </article>
            <div className="centerChildren">
                <button onClick={ () => this.props.loadTeams() }>
                    Reload Teams
                </button>
            </div>
            </React.Fragment>
        )
    }
}
