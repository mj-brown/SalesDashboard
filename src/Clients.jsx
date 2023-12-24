import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { mockTransactions } from '../mockData';

const calculateNewClients = () => {
  // Assuming each user is considered a new client
  const uniqueClients = Array.from(new Set(mockTransactions.map(transaction => transaction.user)));
  const totalNewClients = uniqueClients.length;

  return totalNewClients;
};

const Clients = () => {
  const totalNewClients = calculateNewClients();
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
            <PersonAddAltIcon />
                
            <Typography variant="h5" component="div">
              {totalNewClients}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              New Clients
            </Typography>
            
          </CardContent>
          
        </Card>
      );
}

export default Clients;