import React, { Component } from "react"
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container, Row, Col } from 'reactstrap';


export default class PokemonDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const pokemon = this.props.pokemons.find(pokemon =>
            pokemon.id === parseInt(this.props.match.params.pokemonsId))
             || {id:404, name:"404", nickName: "Sorry Pokemon Not Found"}
    
        return (
            <React.Fragment>
                <div key={pokemon.id} className="card">
                <CardGroup>
                <Col md={2}>
      <Card>
        <CardBody>
          <CardTitle>Name: {pokemon.name}</CardTitle>
          <CardSubtitle>Nick Name: {pokemon.nickName}</CardSubtitle>
          <CardText>Level: {pokemon.level}</CardText>
          <CardText>attack: {pokemon.attack}</CardText>
          <CardText>defence: {pokemon.defence}</CardText>
          <CardText>Special Attack: {pokemon.specialAttack}</CardText>
          <CardText>Special Defence: {pokemon.specialDefense}</CardText>
          <CardText>Speed: {pokemon.speed}</CardText>
          <Button
            onClick={() =>
                this.props.deletePokemon(pokemon.id)
                    .then(() => this.props.history.push("/"))
            }
            className="btn btn-warning">Delete Your Pokemon</Button>

        </CardBody>
      </Card>
      </Col>
    </CardGroup>
                </div>

            </React.Fragment>

        )
    }
}