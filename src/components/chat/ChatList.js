import React, { Component } from "react"
import "./ChatForm.css"
// Set initial state
//State must match Id value of input fields

export default class  extends Component {

    state = {
        chats: "",
        users:","
    }


    render() {
        console.log("render -- ChatList")
        // const {messages} = this.props;
        return (
            <section className="chats">
            {
                this.props.chats.map(chat =>
                    <div key={chat.id}>
                        {chat.message}
                        <div>{chat.user.username}</div>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/chats/${chat.id}/edit`);
                            }}
                            >Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.props.deleteChatMessage(chat.id)}
                            >Delete
                        </button>
                    </div>
                )
            }
        </section>
    )}
}