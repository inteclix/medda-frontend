import React from "react";
import { useHistory, Link as LinkRouter } from "react-router-dom";
import { Grid, Link, Box } from "@material-ui/core";

import doctorsSVG from "assets/doctors.svg";
export default () => {
  return (
    <Grid
      container
      component={Box}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      alignItems="center"
      height="100vh"
    >
      <Grid  component={Box} flex={2} item>
        <img src={doctorsSVG} style={{height: 500}} />
      </Grid>
      <Grid width={320} component={Box} flex={1} item display="flex" justifyContent="space-around">
        <Link component={LinkRouter} to="/signin">
          Connecté
        </Link>
        <Link component={LinkRouter} to="/signup">
          S'inscrire
        </Link>
      </Grid>
    </Grid>
  );
};
