import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Todos extends Component {
  constructor() {
    super();
    this.state = { listOfTodos: [] };
  }
  getAllTodos = () => {
    axios.get("http://localhost:4000/api/v1/todos/").then((responseFromApi) => {
      this.setState({
        listOfTodos: responseFromApi.data,
      });
    });
  };
  componentDidMount() {
    this.getAllTodos();
  }
  render() {
    return (
      <div className="pt-5 ">
        <h1 className="text-center mb-4">List of To Do's</h1>
        <Link to="/create-todo">
          <div className="col text-center">
            <button className="btn btn-Submit">Create To do</button>
          </div>
        </Link>
        <div className="text-justify" >
          {this.state.listOfTodos.map((todo) => {
            return (
              <div key={todo._id} className="listTodo">
                <Link to={`/todo/${todo._id}`}>
                <div className="m-4">
                  <h4 className=" ml-2">{todo.title}</h4>
                  <p className="text-dark m-0 ml-2">{todo.body}</p>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      
      </div>
    );
  }
}
export default Todos;
