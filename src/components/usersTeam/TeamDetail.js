import React, { Component } from "react"


export default class TeamDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const team = this.props.teams.find(a =>
            a.id === parseInt(this.props.match.params.teamId))
             || {id:404, name:"404", discretion: "Dog not found"}

        return (
            <section className="team">
                <div key={team.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {team.name}
                        </h4>
                        <h6 className="card-title">{team.breed}</h6>
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