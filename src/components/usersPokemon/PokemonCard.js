import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container, Row, Col } from 'reactstrap';
// import BelieveInMe from "./Believe-In-Me.mp3"
// import Sound from "@platoai/react-sound"
export default class PokemonCard extends Component {


    render() {
        return (
            
            <React.Fragment>
                               {/* <Sound
   url={BelieveInMe}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   /> */}
                <div key={this.props.pokemon.id} className="card">
                <CardGroup>
                {/* <Col md={2}> */}
      <Card>
        <CardBody>
          <CardTitle>Name {this.props.pokemon.name}</CardTitle>
          <CardSubtitle>Level {this.props.pokemon.level}</CardSubtitle>
          <CardText></CardText>
          <Button
                type="button"
                className="btn btn-success"
                onClick={() => {
                    this.props.history.push(`/pokemons/${this.props.pokemon.id}/edit`);
                }}
                >
                Edit
          </Button>
          <Link className="btn btn-danger" to={`/pokemons/${this.props.pokemon.id}`}>Details</Link>
        </CardBody>
      </Card>
      {/* </Col> */}
    </CardGroup>
                </div>

            </React.Fragment>
        )
    }
}
