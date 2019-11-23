import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";


export class Authentification extends Component {
  render() {
    return (
      <Button variant='contained' color='primary'>
        Hello World
      </Button>

      <Box> component="span" m={1}</Box>
      <Button />
    </Box>
    );
  }
}

export default Authentification;
