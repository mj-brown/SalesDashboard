import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mockTransactions } from '../mockData';

const calculateTotalSales = () => {
  const totalSales = mockTransactions.length;

  return totalSales;
};

const Sales = () => {
  const totalSales = calculateTotalSales();
    return (
        <Card 
        sx={{
          minWidth: '275px',
          height: '200px', // Set the height to 300px
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Space between the content and the edges
        }}
        >
          <CardContent>
            <ShoppingCartIcon />
                
            <Typography variant="h5" component="div">
              {totalSales}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Sales Obtained
            </Typography>
            
          </CardContent>
          
        </Card>
      );
}

export default Sales;