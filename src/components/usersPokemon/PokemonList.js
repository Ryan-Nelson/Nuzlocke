import React, { Component } from 'react'
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

    render() {
        
        return (
    <React.Fragment>
    <div className="centerChildren">
        <button type="button"
            className="btn btn-success"
            onClick={() => {
                this.props.history.push("/teams/new")
            }
            }>
            Make New pokemon
    </button>
    </div>
    <article className="pokemons">
        {
    this.props.pokemons.map(pokemon =>
        <PokemonCard key={`pokemon-${pokemon.id}`}
            pokemon={pokemon}
            deletePokemon={this.props.deletePokemon}
            history={this.props.history}
        />
    )
        }
    </article>
    <div className="centerChildren">
        <button onClick={() => this.props.loadTeams()}>
            Reload Teams
    </button>
    </div>
</React.Fragment>
        )
    }
}
