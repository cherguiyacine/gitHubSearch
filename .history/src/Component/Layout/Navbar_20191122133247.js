import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    // <nav className='navbar bg-primary'>
    //   <h1>
    //     <i className={props.icon} />
    //     {props.title}
    //   </h1>
    //   <ul>
    //     <li>
    //       <a href=''>Home</a>
    //     </li>
    //     <li>
    //       <a href=''>About</a>
    //     </li>
    //   </ul>
    // </nav>
    <h1>h</h1>
  );
};
Navbar.defaultProps = {
  title: "facebook",
  icon: "fa fa-wheelchair"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
