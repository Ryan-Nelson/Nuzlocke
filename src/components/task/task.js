import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class TaskCard extends Component {
    render(){
        // const task = this.props.match.params.tasks.find(a => a.id === parseInt(this.props.match.params.id)) || {}

        return(
            <React.Fragment>
                <div key={`task-${this.props.task.id}`} className="card">
                <Link to={`/tasks/editForm/${this.props.task.id}`}>{this.props.task.taskName}</Link>

                <p>{this.props.task.dateToComplete}</p>
                <p>{this.props.completed}</p>
                </div>
            </React.Fragment>
        )
    }
}