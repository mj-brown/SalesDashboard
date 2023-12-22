import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';



const Revenue = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <CurrencyExchangeIcon />
            <Typography variant="h5" component="div">
                Place holder for value
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Revenue Generated
            </Typography>
            
          </CardContent>
          
        </Card>
      );
}

export default Revenue;