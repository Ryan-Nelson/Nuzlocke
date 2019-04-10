import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PokemonCard from '../usersPokemon/PokemonCard';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container, Row, Col } from 'reactstrap';


export default class TeamCard extends Component {


    constructor(props) {
        super(props);
        this.state = {totalNumberOfpokemonOnTeam: this.props.pokemons.filter(pt => pt.pokemonTeamId === this.props.team.id)}
    }

    render() {

        return (
            <React.Fragment>
                
                <div key={this.props.team.id} className="card">
                <CardGroup>

      <Card>
        <CardBody>
          <CardTitle>Team {this.props.team.name}</CardTitle>
          <CardText>
              <Row>
          {/* <Col md={6}> */}
          {
                                    // this.props.pokemons.filter(pt => pt.pokemonTeamId === this.props.team.id)

                                        this.state.totalNumberOfpokemonOnTeam.map(pokemon =>
                                            <PokemonCard key={`pokemon-${pokemon.id}`}
                                                pokemon={pokemon}
                                                history={this.props.history}

                                            />
                                        )}
        {/* </Col> */}
        </Row>
          </CardText>
                                <Button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    if (this.state.totalNumberOfpokemonOnTeam.length >= 6) {
                                        window.alert("Pokemon Rules Say only 6 max at a time");
                                    } else {
                                        // onClick = this.onclick.bind(this.state.totalNumberOfpokemonOnTeam, 'add');
                                        this.props.history.push("/newPokemon")
                                    }
                                }
                                }>
                                Add New Pokemon
          </Button>
          
          <Button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/${this.props.team.id}/edit`);
                                }}
                            >
                                Edit
                            </Button>
          <Link className="btn btn-danger" to={`/${this.props.team.id}`}>Details</Link>
        </CardBody>
      </Card>
    
    </CardGroup>
                </div>
{/* 
                    <div className="card-body">
                        <h5 className="card-title">
                            <div>{this.props.team.name}</div>
                            <article className="pokemons">
                                {
                                    // this.props.pokemons.filter(pt => pt.pokemonTeamId === this.props.team.id)

                                        this.state.totalNumberOfpokemonOnTeam.map(pokemon =>
                                            <PokemonCard key={`pokemon-${pokemon.id}`}
                                                pokemon={pokemon}
                                                history={this.props.history}

                                            />
                                        )}
                            </article>

                            <div>{this.props.team.win}</div>
                            <div>{this.props.team.lose}</div>
                            <div>{this.props.team.discretion}</div>
                            <div className="centerChildren">
                                <button type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        if (this.state.totalNumberOfpokemonOnTeam.length >= 6) {
                                            window.alert("Pokemon Rules Say only 6 max at a time");
                                        } else {
                                            // onClick = this.onclick.bind(this.state.totalNumberOfpokemonOnTeam, 'add');
                                            this.props.history.push("/newPokemon")
                                        }
                                    }
                                    }>
                                    Add New Pokemon
                                    </button>
                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/${this.props.team.id}/edit`);
                                }}
                            >
                                Edit
                            </button>

                            {
                                (this.props.hasOwnProperty("deleteThisTeam"))
                                    ? <button
                                        onClick={() => this.props.deleteThisTeam(this.props.team.id)}
                                        className="btn btn-danger">Delete</button>
                                    : null
                            }

                        </h5>
                    </div>
                    <Link className="nav-link" to={`/${this.props.team.id}`}>Details</Link>
                </div> */}

            </React.Fragment>
        )
    }
}

