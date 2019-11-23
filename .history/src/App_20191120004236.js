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

  searchUser = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
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
