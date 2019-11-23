import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

const Users = props => {
  console.log(123);
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {props.Users.map(user => (
          <UserItem user={user} />
        ))}
      </div>
    );
  }
};
const UserStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGrap: "1rem"
};

export default Users;
