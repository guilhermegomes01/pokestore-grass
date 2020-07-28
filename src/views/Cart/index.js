import React, { useState, useEffect } from "react";
import {
  withStyles,
  Grid,
  Typography,
  Divider,
  Button,
  TextField,
  IconButton,
} from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";

import { MoneyCurrency } from "../../helpers/MoneyCurrency";

import styles from "./styles.js";
import CartSummary from "./components/CartSummary";

const Cart = ({ classes, productsCart, setProductsCart }) => {
  const [valuesProducts, setValuesProducts] = useState([0]);

  const changeQuantity = (index, quantitySinal, id) => {
    setProductsCart((currentProducts) => {
      if (quantitySinal === "add") {
        currentProducts[index].quantity += 1;
      } else if (quantitySinal === "remove") {
        currentProducts[index].quantity -= 1;
        if (currentProducts[index].quantity === 0) {
          return removeProduct(id);
        }
      }

      return [...currentProducts];
    });
  };

  const removeProduct = (id) => {
    setProductsCart((currentProducts) => {
      return currentProducts.filter((products) => products.id !== id);
    });
  };

  useEffect(() => {
    setValuesProducts([0]);
    productsCart.map((product) => {
      setValuesProducts((currentValues) => {
        return [...currentValues, product.price * product.quantity];
      });
    });
  }, [productsCart]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h2" className={classes.titleCart}>
          Carrinho
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      {productsCart &&
        productsCart.map((products, index) => (
          <Grid item key={products.id}>
            <Grid
              container
              justify="space-between"
              spacing={1}
              direction="column"
            >
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <img
                      src={products.image}
                      className={classes.productImage}
                      // eslint-disable-next-line no-restricted-globals
                      alt={`Imagem do produto ${name}`}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      style={{ height: "100%" }}
                      direction="column"
                      justify="space-between"
                    >
                      <Grid item>
                        <Typography className={classes.productName}>
                          {products.name}
                        </Typography>
                        <Typography className={classes.productPrice}>
                          {MoneyCurrency(
                            products.price * parseInt(products.quantity)
                          )}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          className={classes.deleteButton}
                          onClick={() => removeProduct(products.id)}
                        >
                          Remover
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={2}
                  wrap="nowrap"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton
                      onClick={() =>
                        changeQuantity(index, "remove", products.id)
                      }
                    >
                      <RemoveRoundedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Quantidade"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      disabled
                      value={productsCart[index]?.quantity}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => changeQuantity(index, "add")}>
                      <AddRoundedIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
            </Grid>
          </Grid>
        ))}
      <Grid item>
        <CartSummary valuesProducts={valuesProducts} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Cart);
