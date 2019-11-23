import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ this.refs._text.value });
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input ref="_text" type='text' name='text' placeholder='recherche'></input>
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          ></input>
        </form>
        {this.props.clearBtn > 0 && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
