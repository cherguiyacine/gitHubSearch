import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
    </nav>
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
