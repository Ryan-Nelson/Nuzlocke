import React, { Component } from "react";
import "./task.css"
export default class TaskAddForm extends Component {

  state = {
    userId: "",
    taskName: "",
    dateToComplete: "",
    completed: false
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

  makeNewTask = evt => {
    evt.preventDefault();

    if (this.state.taskName === "") {
      window.alert("Please enter a task");
    } else if (this.state.dateToComplete === "") {
      window.alert("enter an expected completion date")
    } else {
      const newTask = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        taskName: this.state.taskName,
        dateToComplete: this.state.dateToComplete,
        completed: false
      }
      this.props.addTask(newTask)
        .then(() => this.props.history.push("/tasks"))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form class="form-new-task">
          <div className="form-group">
            <label htmlFor="taskName">Task</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Task Name or description" />
          </div>
          <div className="form-group">
            <label htmlFor="dateToComplete">Complete by date:</label>
            <input type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dateToComplete"
              placeholder="expected completion date" />
          </div>
          <button
            type="submt"
            onClick={this.makeNewTask}
            className="list-button">Add Task
              </button>

        </form>

      </React.Fragment>
    )

  }
}