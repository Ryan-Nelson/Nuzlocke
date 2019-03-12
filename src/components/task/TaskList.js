import React, { Component } from "react"
import TaskCard from "./task"
import { Route } from "react-router-dom"

export default class TaskList extends Component {
    render() {
        return (
            <React.Fragment>
                <section >
                   <button className="list-button" onClick={()=>{
                       this.props.history.push('/tasks/form');
                   }}>Add Task</button>

                   <h2 className="title">Tasks</h2>
                    {
                        this.props.tasks.map(task =>
                            <TaskCard key={`task-${task.id}`}
                                // task={this.props.task}
                                task={task}
                                />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}