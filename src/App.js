import React, { Component } from "react";
import "./App.css";
import Todos from "./pages/Todos";
import { Switch, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoDetail from "./pages/TodoDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/create-todo" component={CreateTodo} />
          <Route exact path="/todo/:id" component={TodoDetail} />
       
  
        </Switch>
       
      </div>
    );
  }
}

export default App;
