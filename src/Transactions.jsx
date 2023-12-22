import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { mockTransactions } from '../mockData';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions(mockTransactions);}, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Transactions
      </Typography>
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction.txId}>
            <ListItemText
              primary={`Transaction ID: ${transaction.txId}`}
              secondary={`User: ${transaction.user}, Date: ${transaction.date}, Cost: ${transaction.cost}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Transactions;