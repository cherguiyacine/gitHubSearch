import React, { Component } from "react";

const UserItem = props => {
  return (
    <div className='card text-center '>
      <img
        src={props.user.avatar_url}
        alt=''
        className='round-img'
        style={{ width: "80px" }}
      ></img>
      <h4>{props.user.login}</h4>
      <div>
        <a href={props.user.html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
