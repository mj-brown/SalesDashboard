import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Sales = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <ShoppingCartIcon />
                
            <Typography variant="h5" component="div">
              Pace holder for value
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Sales Obtained
            </Typography>
            
          </CardContent>
          
        </Card>
      );
}

export default Sales;