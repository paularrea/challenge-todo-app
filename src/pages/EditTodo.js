import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title,
      body: this.props.todo.body,
      date: this.props.todo.date
    };
  }

  handleFormSubmit = todo => {
    const title = this.state.title;
    const body = this.state.Description;
    const date = this.state.date;

    todo.preventDefault();

    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.todo._id}`, {
        title,
        body,
        date
      })
      .then(() => {
        this.props.getTheTodo();
        // after submitting the form, redirect to '/projects'
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( {[name]: value })
      };

  render() {
    return (
      <div>
    
        <h3>Edit {this.state.title}</h3>
        <form className="mt-3" onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control "
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="body"
            className="form-control description-box "
            value={this.state.body}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="form-group">
          <label>Do it Before...</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={this.state.date}
            onChange={e => this.handleChange(e)}
          />
          </div>

          <input className="btn btn-Submit mt-3" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditTodo