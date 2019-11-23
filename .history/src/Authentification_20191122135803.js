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
        <ul>
          {this.todos.map(todo => (
            <li>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Authentification;
