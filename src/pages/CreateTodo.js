import React, { Component } from "react";
import service from "../api/service";
import { Link } from "react-router-dom";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      imageUrl: "",
      date: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // handleFileUpload = (e) => {
  //   console.log("The file to be uploaded is :", e.target.files);
  //   const uploadData = new FormData();
  //   uploadData.append("imageUrl", e.target.files[0]);
  //   service
  //     .handleUpload(uploadData)
  //     .then((response) => {
  //       this.setState({ imageUrl: response.secure_url });
  //     })
  //     .catch((err) => {
  //       console.log("Error while uploading the file:", err);
  //     });
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    service
      .saveNewTodo(this.state)
      .then((res) => {
        this.props.history.push("/");
        console.log("Added", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };

  render() {
    return (
      <div className="p-5">
        <div className="">
          <h3>Create To Do:</h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="idName">Title</label>
              <input
                required
                className="form-control formadd"
                id="idName"
                aria-describedby="Name"
                placeholder="Title"
                type="text"
                name="title"
                value={this.state.title || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idDescriptionProblem">Description</label>
              <textarea
                required
                className="form-control "
                id="idDescriptionProblem"
                aria-describedby="Description"
                placeholder="Description..."
                type="text"
                name="body"
                value={this.state.body || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="idDate">To do before...</label>
              <input
                required
                className="form-control formadd"
                type="date"
                name="date"
                id="idDate"
                placeholder="do before..."
                value={this.state.date || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            {/* <div>
              <label className="pt-3" htmlFor="idImage">
                Add Todo Image
              </label>
              <input
                required
                type="file"
                className="form-control formadd"
                id="idImage"
                aria-describedby="image"
                placeholder="Event Image"
                onChange={(e) => this.handleFileUpload(e)}
              />
            </div> */}

            <div className="text-center pt-5">
              <button className="text-center btn btn-Submit" type="submit">
                Create Event
              </button>
            </div>
          </form>
        </div>
        <Link to="/">
          <div className="col text-center">
            <button className="btn btn-dark mt-4">Back</button>
          </div>
        </Link>
      </div>
    );
  }
}
export default CreateTodo;
