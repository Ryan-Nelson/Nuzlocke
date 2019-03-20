import React, { Component } from "react"


export default class PokemonDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const pokemon = this.props.pokemons.find(pokemon =>
            pokemon.id === parseInt(this.props.match.params.pokemonsId))
             || {id:404, name:"404", nickName: "Dog not found"}
    
        return (
            <section className="team">
                <div key={pokemon.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {pokemon.nickName}
                        </h4> 
                        <h6 className="card-title">{pokemon.name}</h6>
                        <h4 className="card-title">{pokemon.level}</h4>
                        <h4 className="card-title">{pokemon.attack}</h4>
                        <h4 className="card-title">{pokemon.defence}</h4>
                        <h4 className="card-title">{pokemon.specialAttack}</h4>
                        <h4 className="card-title">{pokemon.specialDefense}</h4>
                        <h4 className="card-title">{pokemon.speed}</h4>

                        <button
                            onClick={() =>
                                this.props.deletePokemon(pokemon.id)
                                    .then(() => this.props.history.push("/pokemons"))
                            }
                            className="btn btn-warning">Delete Your Pokemon</button>
                    </div>
                </div>
            </section>
        )
    }
}