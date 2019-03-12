import React, { Component } from "react"

class Messages extends Component {
  render() {
    console.log("render -- Chat")
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;