import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

export class Authentification extends Component {
  render() {
    return (
      <Box component='span' m={1}>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Box>
    );
  }
}

export default Authentification;
