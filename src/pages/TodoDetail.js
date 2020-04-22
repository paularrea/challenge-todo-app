import React, { Component } from "react";
import axios from "axios";
import EditTodo from "./EditTodo";
import { Link } from "react-router-dom";



class TodoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  getTodo = () => {
    const { params } = this.props.match;
    console.log(params, "params")
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then((responseFromApi) => {
        const todo = responseFromApi.data;
        console.log(responseFromApi, "todooooooooooooo")
        this.setState(todo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  componentDidMount() {
    this.getTodo();
  }

  renderEditForm = () => {
    if (!this.state.title) {
      this.getTodo();
    } else {
      //{...props} => so we can have 'this.props.history' in Edit.js
      return (
        <EditTodo
          todo={this.state}
          getTheTodo={this.getTodo}
          {...this.props}
        />
      );
    }
  };

  deleteProject = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/');

    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render() {
  
    return (
      <div className="p-5">
        <div>{this.renderEditForm()} </div>
        <Link to="/">
          <div className="col text-center">
              <div className= "row d-flex justify-content-center mt-5">
            <div className= "col">
            <button  className="btn btn-danger" onClick={() => this.deleteProject()}>Delete</button>
            </div>
            <div className= "col">
            <button className="btn btn-dark">Back</button>
            </div>
            </div>
          </div>
        </Link>
    </div>
    );
  }
}

export default TodoDetail;
