import React, { Component } from "react"
import "./ChatForm.css"

export default class ChatForm extends Component {
    state = {
        chat: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        evt.preventDefault()
        if (this.state.chat === "") {
            window.alert("Please Enter Message!")
        } else {
            const chat = {
                message: this.state.chat,
                userId:parseInt(sessionStorage.getItem('credentials'))
            }
            this.props.addChat(chat).then(() => this.props.history.push("/chats"))
        }
    }

render() {
    console.log("render -- ChatForm")
    return (
        <React.Fragment>

            <form className="chatForm">
                <div className="form-group">
                    <label htmlFor="chatName"></label>
                    <input type="text" required
                           className="form-control"
                           onChange={this.handleFieldChange}
                           id="chat"
                           placeholder="Please Enter Chat Message..." />
                </div>
                <div className="button-group">
                    <button
                    id="submitButton"
                    type="submit"
                    onClick={this.constructNewMessage}
                    className="btn btn-primary"
                    >Send</button>
                </div>
            </form>

        </React.Fragment>
        )
    }
}