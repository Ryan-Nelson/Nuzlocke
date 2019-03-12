import React, { Component } from "react"
import { Route } from "react-router-dom"

import PokemonManager from "../modules/PokemonManager"
import PokemonForm from "./usersTeam/PokemonForm";
import PokemonEditForm from "./usersTeam/PokemonEditForm";
import TeamManager from "../modules/TeamManager"
import TeamList from './usersTeam/TeamList'
import TeamDetail from './usersTeam/TeamDetail'
import TeamForm from './usersTeam/TeamForm';
import TeamEditForm from './usersTeam/TeamEditForm';

class ApplicationViews extends Component {
    state = {
        teams: [],
        pokemons: []

    }
    aUserId = this.props.activeUserId()

    deleteThisTeam = (id) =>
        TeamManager.delete(id)
            .then(TeamManager.getAll)
            .then(teams => this.setState({ teams: teams }))

    addTeams = teams => {
        return TeamManager.addTeams(teams)
            .then(() => TeamManager.getAll())
            .then(teams =>
                this.setState({
                    teams: teams
                })
            )
    }
    addPokemon = pokemon => {
        return PokemonManager.addPokemon(pokemon)
            .then(() => PokemonManager.getAll())
            .then(pokemons =>
                this.setState({
                    pokemons: pokemons
                })
            )
    }

    updateTeams = team => {
        return TeamManager.updateTeams(team)
            .then(() => TeamManager.getAll())
            .then(teams =>
                this.setState({
                    teams: teams
                })
            )
    }

    getAllTeamsAgain = () =>
        TeamManager.getAll().then(teams => this.setState({ teams: teams }))


    componentDidMount() {
        const newState = {}

        TeamManager.getAll()
            .then(teams => newState.teams = teams)
            .then(() => this.setState(newState))


    }

    render() {
        console.log(this.props.activeUser)
        return (
            <React.Fragment>
                <Route exact path="/teams" render={(props) => {
                    return <TeamList teams={this.state.teams}
                        deleteThisTeam={this.deleteThisTeam}
                        loadTeams={this.getAllTeamsAgain}
                        {...props}
                    />
                }} />
                <Route exact path="/teams/:teamsId(\d+)" render={(props) => {
                    return <TeamDetail
                        {...props}
                        deleteThisTeam={this.deleteThisTeam}
                        teams={this.state.teams} />
                }} />
                <Route path="/teams/:teamsId(\d+)/edit" render={props => {
                    return <TeamEditForm
                        {...props}
                        updateNews={this.updateNews} />
                }}
                />
                <Route path="/teams/new" render={(props) => {
                    return <TeamForm {...props}
                        addTeams={this.addTeams}
                    />
                }} />
                />
                <Route path="/teams/new" render={(props) => {
                    return <PokemonForm {...props}
                        addPokemon={this.addPokemon}
                    />
                }} />
                />
            </React.Fragment>
        )
    }
}









export default ApplicationViews
