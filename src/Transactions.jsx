import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { mockTransactions } from "../mockData";
import { Divider } from "@mui/material";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  return (
    <Box
      sx={{
        border: "4px solid #044778",
        boxShadow: "2px 2px 4px #000000",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          paddingTop: "8px",
          fontSize: "1.5rem",
          fontWeight: "bolder",
          color: "#044778",
        }}
      >
        Transactions
      </Typography>
      <List
        sx={{
          maxHeight: "286px",
          overflowY: "auto",
        }}
      >
        {transactions.map((transaction, index) => (
          <React.Fragment key={transaction.txId}>
            <ListItem>
              <ListItemText
                primary={`Transaction ID: ${transaction.txId}`}
                secondary={`User: ${transaction.user}, Date: ${transaction.date}, Cost: ${transaction.cost}`}
              />
            </ListItem>
            {index < transactions.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
