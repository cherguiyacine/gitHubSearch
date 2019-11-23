import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export class Authentification extends Component {
  render() {
    return (
      <Container maxWidth='sm'>
        <Typography
          component='div'
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    );
  }
}

export default Authentification;
