import React, { Component } from 'react'
import TeamCard from './TeamCard';
import Sound from "@platoai/react-sound"
import Pokemon from "./Pokemon.mp3"
import "./team.css"

export default class TeamList extends Component {

    render() {

        return (
            
            <React.Fragment>
                 <Sound
   url={Pokemon}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
            <div className="custom-cur">
            {/* new team button */}
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/newTeam")}
                        }>
                    Make New Team
                </button>
            </div>
            
            <article className="custom-cur">
                {
                    this.props.teams.filter(team => team.userId === this.props.activeUser.id).map(team =>
                        <TeamCard key={`team-${team.id}`}
                            team={team}
                            pokemons={this.props.pokemons}
                            deleteThisTeam={this.props.deleteThisTeam}
                            history={this.props.history}
                            pokemonOnTeam={this.props.pokemonOnTeam}
                            />
                    )
                }
            </article>
            </React.Fragment>
        )
    }
}
