import React from "react";
import Navbar from "./Component/Layout/Navbar";
import Users from "./Component/Users/Users";
import Search from "./Component/Users/Search";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });

    Console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUser = text => {
    console.log(text);
  };

  render() {
    return (
      <div className='App'>
        <Navbar title='Yacine CHERGUI' icon='fa fa-wheelchair'></Navbar>
        <div className='container'>
          <Search searchUser={this.searchUser} />

          <Users Users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
