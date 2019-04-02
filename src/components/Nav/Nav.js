import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import charmander_dancing from "./charmander_dancing.gif"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">home</Link>
          </li>
          
        </ul>
        <span className="nav-link"><img className="navImg" src="https://emojis.slackmojis.com/emojis/images/1469223471/679/charmander_dancing.gif?1469223471" width="50" height="50"></img>Pokemon Master {this.props.activeUser.username}<img className="navImg" src="https://emojis.slackmojis.com/emojis/images/1469223471/679/charmander_dancing.gif?1469223471" width="50" height="50"></img></span>
          <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.logout}>
          Logout
        </button>
      </nav>
    )
  }
}

export default Nav
