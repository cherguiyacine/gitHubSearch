import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { compose, spacing, palette } from "@material-ui/system";
const Box = styled("div")(compose(spacing, palette));

export class Authentification extends Component {
  render() {
    return (
      <Box color='white' bgcolor='palevioletred' p={1}>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Box>
    );
  }
}

export default Authentification;
