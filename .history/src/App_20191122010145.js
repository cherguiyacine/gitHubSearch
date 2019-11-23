import React from "react";
import Navbar from "./Component/Layout/Navbar";
import Users from "./Component/Users/Users";
import Search from "./Component/Users/Search";
import Alert from "./Component/Layout/Alert";

import axios from "axios";
import Authentification from "./Authentification";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
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
  alert = (msg, type) => {
    console.log(msg);
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(()=>this.setState({alert:null})4000)
  };
  render() {
    return (
      <div className='App'>
        <Navbar title='Yacine CHERGUI' icon='fa fa-wheelchair'></Navbar>
        <Alert alert={this.state.alert}></Alert>
        <div className='container'>
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            clearBtn={this.state.users.length}
            alert={this.alert}
          />

          <Users Users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
