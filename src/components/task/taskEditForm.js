import React, { Component } from "react";
import "./task.css"
import taskManager from "../../modules/taskManager";
// const $ = document.querySelector.bind(document)

export default class TaskEditForm extends Component {

  state = {
    userId: parseInt(sessionStorage.getItem("credentials")),
    taskName: "",
    dateToComplete: "",
    completed: false,
    id: ""
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

  EditTask = evt => {
    evt.preventDefault()
    if (this.state.taskName === "") {
      window.alert("Please enter a task");
    }
    else if (this.state.dateToComplete === "") {
      window.alert("Please enter a date");
    } else {
      const updatedTask = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        taskName: this.state.taskName,
        dateToComplete: this.state.dateToComplete,
        completed: this.state.completed,
        id: this.state.id
      }
      console.log("updated task: ", updatedTask)
      this.props.editUpdatedTask(updatedTask)
        .then(() => this.props.history.push("/tasks"))
    }
  }
  componentDidMount(task) {
    taskManager.get(this.props.match.params.taskId)
      .then(task => {
        this.setState({
          taskName: task.taskName,
          dateToComplete: task.dateToComplete,
          userId: task.userId,
          completed: task.completed,
          id: task.id
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <form class="form-new-task" id="editTaskForm">
          <div className="form-group">
            <label htmlFor="taskName">Task</label>
            <input
              type="text"
              required
              className="form-control"
              id="taskName"
              onChange={this.handleFieldChange}
              value={this.state.taskName} />
          </div>
          <div className="form-group">
            <label htmlFor="dateToComplete">Complete by date:</label>
            <input type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dateToComplete"
              value={this.state.dateToComplete} />
          </div>
          <button
            type="submit"
            onClick={this.EditTask}
            className="list-button">Update Task
              </button>

        </form>

      </React.Fragment>
    )

  }
}