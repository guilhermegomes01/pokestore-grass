import React from "react";
import {
  withStyles,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";

// Internal Components
import styles from "./styles";
import logo from "../../assets/logo.svg";

const Header = ({ classes }) => {
  return (
    <Container maxWidth={false} className={classes.root}>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <img src={logo} alt="Pokémon Store - Logo" />
              </Grid>
              <Grid item>
                <Typography className={classes.typeStore} variant="h1">
                  Grass
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Busque aqui seu produto"
              className={classes.searchBar}
              variant="outlined"
              InputProps={{ endAdornment: <AccountCircle /> }}
            />
          </Grid>
          <Grid item>
              {/* {Colocar saldo disponiVel} */}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Header);
