import React, { Component } from "react";
import Modal from "./components/Modal.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveAccount: {
        customer : "",
        deposite : "",
      },
      AccountsList: []
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios 
      .get("https://bank-django-drf-local.herokuapp.com/account/")
  }
}


class App extends Component {
 
  
  refreshList = () => {
    axios
      .get("https://bank-django-drf-local.herokuapp.com/account/")
      .then(res => this.setState({ todoList: res.data.results }))
      .catch(err => console.log(err));
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;