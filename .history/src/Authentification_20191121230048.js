import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';


export class Authentification extends Component {
  render() {
    return (
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      <Box></Box>
      <Box component="span" m={1}>
    </Box>
    );
  }
}

export default Authentification;
