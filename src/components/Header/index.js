import React from "react";
import {
  withStyles,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from '@material-ui/icons/Search';

// Internal Components
import styles from "./styles";
import logo from "../../assets/logo.svg";

const Header = ({ classes }) => {
  return (
    <Container maxWidth={false} className={classes.root}>
      <Container>
        <Grid container justify="space-between" spacing={2} alignItems="center">
          <Grid item md={4}>
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
          <Grid item md={5}>
            <TextField
              fullWidth
              placeholder="Busque aqui seu produto"
              className={classes.searchBar}
              variant="outlined"
              size="medium"
              InputProps={{ endAdornment: <SearchIcon color="primary" /> }}
            />
          </Grid>
          <Grid item md={3}>
            {/* {Colocar saldo disponiVel} */}
            <Grid container spacing={1} justify="flex-end" alignItems="center">
              <Grid item>
                <AccountCircle className={classes.iconBalance} />
              </Grid>
              <Grid item>
                <Typography variant="body1" color="textSecondary" className={classes.balanceTitle}>Saldo Disponível</Typography>
                <Typography variant="caption" color="textSecondary">R$30,00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Header);
