import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

export class Authentification extends Component {
  render() {
    return (
      <Box component='span' m={100} color='text.primary'>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Box>
      <Box color="text.primary" clone>
       <Button variant='contained' color='primary'>
         Hello World
       </Button>
     </Box>
    );
  }
}

export default Authentification;
