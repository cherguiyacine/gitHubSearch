import React from "react";
import Navbar from "./Component/Layout/Navbar";
import Users from "./Component/Users/Users";
import Search from "./Component/Users/Search";
import axios from "axios";
import Authentification from "./Authentification";
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

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    return (
      <div className='App'>
        <Authentification></Authentification>
      </div>
    );
  }
}

export default App;
