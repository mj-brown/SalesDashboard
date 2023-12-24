import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { mockTransactions } from "../mockData";

const calculateTotalRevenue = (transactions) => {
  // Use reduce to sum up the cost values
  const totalRevenue = transactions.reduce((sum, transaction) => {
    // Parse the cost value to a float and add it to the sum
    return sum + parseFloat(transaction.cost);
  }, 0);

  // Round the total revenue to 2 decimal places
  return totalRevenue.toFixed(2);
};


const Revenue = () => {
  const totalRevenue = calculateTotalRevenue(mockTransactions);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CurrencyExchangeIcon />
        <Typography variant="h5" component="div">
          {`$${totalRevenue}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Revenue Generated
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Revenue;
