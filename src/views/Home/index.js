import React, { useState, useEffect } from "react";
import {
  withStyles,
  Grid,
  Container,
  Typography,
  Hidden,
} from "@material-ui/core";

// Internal Components
import Header from "../../components/Header";
import Cart from "../Cart";
import CardProduct from "./components/CardProduct";
import { getType, getPokemon } from "../../services/pokeAPI";

const styles = (theme) => ({
  root: {
    // height: "100%",
    backgroundColor: theme.palette.default.lightGrey,
  },
  subtitleProducts: {
    textTransform: "uppercase",
  },
  productColumn: {
    marginTop: theme.spacing(2),
  },
  cartColumn: {
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(2),
    // position: 'fixed'
  },
});

const Home = ({ classes }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getType().then((data) => {
    //   data.pokemon.map((pokemon) => {
    //     getPokemon(pokemon.pokemon.url).then((one) => {
    //       setPokemonList((cur) => {
    //         return [...cur, { ...one }];
    //       });
    //     });
    //   });
    // });
    getPokemon("https://pokeapi.co/api/v2/pokemon?limit=10").then((one) => {
      one.results.map((result) => {
        getPokemon(result.url).then((one) => {
          setPokemonList((cur) => {
            return [...cur, { ...one }];
          });
        });
      });
    });
  }, []);

  return (
    <Container maxWidth={false} className={classes.root} disableGutters>
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className={classes.productColumn}>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Typography variant="h2" className={classes.subtitleProducts}>
                  Pokémon
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  {pokemonList.map((pokemon) => (
                    <Grid key={pokemon.id} item xs={6} sm={4} lg={3}>
                      <CardProduct
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        price={pokemon.weight}
                        setProductsCart={setProductsCart}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item xs={4} className={classes.cartColumn}>
              <Cart productsCart={productsCart} setProductsCart={setProductsCart} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Home);
