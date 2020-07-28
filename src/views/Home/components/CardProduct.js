import React from "react";
import {
  withStyles,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";

import NotImage from "../../../assets/not-image.png";
import { CapitalizeString } from "../../../helpers/CapitalizeString";
import { MoneyCurrency } from "../../../helpers/MoneyCurrency";

const styles = (theme) => ({
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
  cashback: {
    fontSize: 11,
  },
  cashbackPercentage: {
    color: theme.palette.primary.main,
  },
});

const CardProduct = ({ classes, id, name, image, price, setProductsCart }) => {
  return (
    <Card>
      <CardMedia component="img" style={{}} image={image ? image : NotImage} />
      <CardContent>
        <Typography gutterBottom>{CapitalizeString(name)}</Typography>
        <Typography className={classes.price}>
          {MoneyCurrency(price)}
        </Typography>
        <Grid container alignItems="center" style={{ color: "#1d1d1d80" }}>
          <Grid item style={{ display: "flex", paddingRight: 4 }}>
            <MonetizationOnRoundedIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography className={classes.cashback}>
              Receba R$ 3,00{" "}
              <span className={classes.cashbackPercentage}>(10% de volta)</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            setProductsCart((currentProducts) => {
              const productComplete = {
                id,
                name: CapitalizeString(name),
                image,
                price,
                quantity: 1,
              };

              const exists = currentProducts.find(
                (product) => product.id === productComplete.id
              );

              if (exists === undefined) {
                return [...currentProducts, { ...productComplete }];
              } else {
                currentProducts.map((product) => {
                  if (product.id === exists.id) {
                    product.quantity += 1;
                  }
                });
                return [...currentProducts];
              }
            });
          }}
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(CardProduct);
