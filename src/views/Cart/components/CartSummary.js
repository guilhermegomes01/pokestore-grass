import React, { useState } from "react";
import {
  withStyles,
  Grid,
  Typography,
  Divider,
  Switch,
} from "@material-ui/core";
import { MoneyCurrency } from "../../../helpers/MoneyCurrency";
import CustomLayoutSummary from "./CustomLayoutSummary";

const styles = (theme) => ({
  titleCart: {
    textTransform: "uppercase",
  },
});

const sumValues = (accumulator, currentValue) => accumulator + currentValue;

const CartSummary = ({ classes, valuesProducts }) => {
  const [useBalance, setUseBalance] = useState(false);

  const handleChangeBalance = (event) => {
    setUseBalance(event.target.checked);
  };

  return (
    <Grid container spacing={2}>
      <Grid item style={{ marginTop: 150 }}>
        <Typography variant="h2" className={classes.titleCart}>
          Resumo do Carrinho
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <CustomLayoutSummary
              leftText="Subtotal"
              rightText={MoneyCurrency(valuesProducts.reduce(sumValues))}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography>Usar saldo</Typography>
              </Grid>
              <Grid item>
                <Switch
                  checked={useBalance}
                  onChange={handleChangeBalance}
                  name="balance"
                  color="primary"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <CustomLayoutSummary leftText="Saldo" rightText="R$30,00" />
      </Grid>
      <Grid item xs={12}>
        <CustomLayoutSummary leftText="Total" rightText="R$30,00" />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CartSummary);
