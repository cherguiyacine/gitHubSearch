import React, { Component } from "react";
import Button from "@material-ui/core/Button";


export class Authentification extends Component {
  render() {
    return (
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      
      <Box component="span" m={1}>
      <Button />
    </Box>
    );
  }
}

export default Authentification;
