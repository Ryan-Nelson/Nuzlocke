import React, { Component } from "react"
import { Route } from "react-router-dom"

import PokemonManager from "../modules/PokemonManager"
import PokemonCard from "./usersPokemon/PokemonCard"
import PokemonDetail from "./usersPokemon/PokemonDetail"
import PokemonList from "./usersPokemon/PokemonList"
import PokemonForm from "./usersPokemon/PokemonForm";
import PokemonEditForm from "./usersPokemon/PokemonEditForm";
import TeamManager from "../modules/TeamManager"
import TeamList from './usersTeam/TeamList'
import TeamDetail from './usersTeam/TeamDetail'
import TeamForm from './usersTeam/TeamForm';
import TeamEditForm from './usersTeam/TeamEditForm';
import TeamCard from "./usersTeam/TeamCard";

export default class ApplicationViews extends Component {
    state = {
        teams: [],
        pokemons: []

    }
    aUserId = this.props.activeUserId()

    deleteThisTeam = (id) =>
        TeamManager.delete(id)
            .then(TeamManager.getAll)
            .then(teams => this.setState({ teams: teams }))

    deletePokemon = (id) =>
        PokemonManager.delete(id)
            .then(PokemonManager.getAll)
            .then(pokemons => this.setState({ pokemons: pokemons }))

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
    updatePokemon = pokemon => {
        return PokemonManager.updatePokemon(pokemon)
            .then(() => PokemonManager.getAll())
            .then(pokemons =>
                this.setState({
                    pokemons: pokemons
                })
            )
    }

    getAllTeamsAgain = () =>
        TeamManager.getAll().then(teams => this.setState({ teams: teams }))

    getAllPokemonAgain = () =>
        PokemonManager.getAll().then(pokemons => this.setState({ pokemons: pokemons }))


    componentDidMount() {
        const newState = {}

        TeamManager.getAll()
            .then(teams => newState.teams = teams)
            .then(() => this.setState(newState))
            PokemonManager.getAll()
            .then(pokemons => newState.pokemons = pokemons)
            .then(() => this.setState(newState))


    }

    render() {
        console.log(this.props.activeUser)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <TeamList teams={this.state.teams}
                        deleteThisTeam={this.deleteThisTeam}
                        loadTeams={this.getAllTeamsAgain}
                        pokemons={this.state.pokemons}

                        {...props}
                    />
                }} />
                {/* <Route exact path="/teams" render={(props) => {
                    return <TeamList teams={this.state.teams}
                        deleteThisTeam={this.deleteThisTeam}
                        loadTeams={this.getAllTeamsAgain}
                        pokemons={this.state.pokemons}
                        {...props}
                    />
                }} /> */}
                <Route exact path="/:teamsId(\d+)" render={(props) => {
                    return <TeamDetail
                        {...props}
                        deleteThisTeam={this.deleteThisTeam}
                        teams={this.state.teams} />
                }} />
                <Route path="/:teamsId(\d+)/edit" render={props => {
                    return <TeamEditForm
                        {...props}
                        updateTeams={this.updateTeams} />
                }}
                />
                <Route path="/new" render={(props) => {
                    return <TeamForm {...props}
                        addTeams={this.addTeams}
                        addPokemon={this.addPokemon}
                    />
                }} />
                />
                {/* <Route path="/new" render={(props) => {
                    return <TeamCard {...props}
                    pokemons={this.state.pokemons}
                    deletePokemon={this.deletePokemon}
                    loadPokemon={this.getAllPokemonsAgain}
                    />
                }} />
                /> */}
                <Route path="/pokemonList" render={(props) => {
                    return <PokemonList pokemons={this.state.pokemons}
                        deletePokemon={this.deletePokemon}
                        loadPokemon={this.getAllPokemonsAgain}
                        {...props}
                    />
                }} />
                <Route exact path="/:pokemonsId(\d+)" render={(props) => {
                    return <PokemonDetail
                        {...props}
                        deletePokemon={this.deletePokemon}
                        pokemons={this.state.pokemons} />
                }} />
                <Route path="/:pokemonsId(\d+)/edit" render={props => {
                    return <PokemonEditForm
                        {...props}
                        updatePokemon={this.updatePokemon} />
                }}
                />
                <Route path="/newPokemon" render={(props) => {
                    return <PokemonForm {...props}
                        addPokemon={this.addPokemon}
                    />
                }} />
                />

            </React.Fragment>
        )
    }
}

