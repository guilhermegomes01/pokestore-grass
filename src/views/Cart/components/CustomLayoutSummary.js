import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";

const styles = (theme) => ({});

const LayoutSummary = ({ leftText, rightText }) => {
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography>{leftText}</Typography>
      </Grid>
      <Grid item>
        <Typography>{rightText}</Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LayoutSummary);
