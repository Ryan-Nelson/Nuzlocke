import React, { Component } from "react"
import ChatManager from '../../modules/ChatManager'
import "./ChatForm.css"



export default class ChatFormEdit extends Component {
    // Set initial state
    state = {
      newMessage: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingChat = evt => {
      evt.preventDefault()

        const editedChat = {
          id: this.props.match.params.chatId,
          message: this.state.newMessage,
          userId:parseInt(sessionStorage.getItem('credentials'))
        };

    this.props.updateChat(editedChat)
    .then(() => this.props.history.push("/chats"))

  }

    componentDidMount() {
      ChatManager.get(this.props.match.params.chat)
      .then(chat => {
        this.setState({
            chat: this.state.chat
        });
      });
    }


    render() {
        return (
          <React.Fragment>
            <form className="ChatForm">
              <div className="form-group">
                <label htmlFor="chatName"> Message Content </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="newMessage"
                  value = {this.state.chatName}
                />
              </div>

              <button
                type="submit"
                onClick={this.updateExistingChat}
                className="btn btn-primary"
                >Submit
              </button>
            </form>
          </React.Fragment>
        );
      }
  }