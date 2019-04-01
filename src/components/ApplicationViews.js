import React, { Component } from "react"
import { Route } from "react-router-dom"

import PokemonInAPI from "../modules/PokemonAPI/PokemonInAPI"
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
        pokemons: [],
        pokemonOnTeam: [],
        pokemonData: []



    }
    aUserId = this.props.activeUserId()

    // getAllPokemonInapi = () =>
    // PokemonInAPI.getAllPokemon().then(pokemonData => this.setState({ pokemonData: pokemonData}))

    // getAllPokemonAgain = () =>
    // PokemonManager.getAll().then(pokemons => this.setState({ pokemons: pokemons }))

    getPokemon() {
        return fetch(`${this.state.pokemons.pokemonInDatabase}`).then(e => e.json());
    }


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
    addPokemons = pokemons => {
        return PokemonManager.addPokemons(pokemons)
            .then(() => PokemonManager.getAll())
            .then(pokemons =>
                this.setState({
                    pokemons: pokemons
                })
            )
    }

    updateTeam = team => {
        return TeamManager.updateTeam(team)
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
            .then(() => PokemonInAPI.getAllPokemon())
            .then(pokemonData => newState.pokemonData = pokemonData.results)
            .then(() => PokemonManager.getAll())
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
                        pokemonOnTeam={this.state.pokemonOnTeam}
                        activeUser={this.props.activeUser}

                        {...props}
                    />
                }} />
                <Route exact path="/:teamsId(\d+)" render={(props) => {
                    return <TeamDetail

                        teams={this.state.teams}
                        deleteThisTeam={this.deleteThisTeam}
                        loadTeams={this.getAllTeamsAgain}
                        pokemons={this.state.pokemons}
                        pokemonOnTeam={this.state.pokemonOnTeam}

                        {...props}
                    // {...props}
                    // deleteThisTeam={this.deleteThisTeam}
                    // pokemons={this.state.pokemons}
                    // teams={this.state.teams}
                    // pokemonOnTeam={this.state.pokemonOnTeam}
                    />

                }} />
                <Route path="/:teamsId(\d+)/edit" render={props => {
                    return <TeamEditForm
                        {...props}
                        updateTeam={this.updateTeam} />

                }}
                />
                <Route path="/newTeam" render={(props) => {
                    return <TeamForm {...props}
                        addTeams={this.addTeams}
                        addPokemon={this.addPokemon}
                    // PokemonInAPI={this.PokemonInAPI}

                    />
                }} />

                <Route path="/pokemonList" render={(props) => {
                    return <PokemonList pokemons={this.state.pokemons}
                        getPokemon={this.getPokemon}
                        deletePokemon={this.deletePokemon}
                        loadPokemon={this.getAllPokemonsAgain}
                        {...props}
                    />
                }} />
                <Route exact path="/pokemons/:pokemonsId(\d+)" render={(props) => {
                    return <PokemonDetail
                        {...props}
                        getPokemon={this.getPokemon}
                        deletePokemon={this.deletePokemon}
                        pokemons={this.state.pokemons}

                    />

                }} />
                <Route path="/pokemons/:pokemonsId(\d+)/edit" render={props => {
                    return <PokemonEditForm
                        {...props}
                        updatePokemon={this.updatePokemon}
                        teams={this.state.teams}
                        activeUser={this.props.activeUser}
                    />
                }}
                />
                <Route path="/newPokemon" render={(props) => {
                    return <PokemonForm {...props}
                        addPokemons={this.addPokemons}
                        teams={this.state.teams}
                        pokemonData={this.state.pokemonData}
                        activeUser={this.props.activeUser}
                    />
                }} />


            </React.Fragment>
        )
    }
}

