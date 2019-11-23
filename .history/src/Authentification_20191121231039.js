import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

export class Authentification extends Component {
  render() {
    return (
      <Box color='white' bgcolor='palevioletred' p={23}>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Box>
    );
  }
}

export default Authentification;
