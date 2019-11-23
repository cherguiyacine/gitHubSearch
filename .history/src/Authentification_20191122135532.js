import React, { Component } from "react";

export class Authentification extends Component {
  todos = [
    { id: 1, text: "value 1" },
    { id: 2, text: "value 2" },
    { id: 3, text: "value 3" },
    { id: 4, text: "value 4" }
  ];
  render() {
    return (
      <div>
        {this.todos.map(todo => (
          <i>{todo.text}</i>
        ))}
        <h1>hey</h1>
      </div>
    );
  }
}

export default Authentification;
