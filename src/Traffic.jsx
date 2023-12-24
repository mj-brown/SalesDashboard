import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SignpostIcon from '@mui/icons-material/Signpost';
import { mockTransactions } from '../mockData';

const calculateTraffic = () => {
  const totalTraffic = mockTransactions.length;

  return totalTraffic;
}

const Traffic = () => {
  const totalTraffic = calculateTraffic();
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
            <SignpostIcon />
                
            <Typography variant="h5" component="div">
              {totalTraffic}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Traffic Received
            </Typography>
            
          </CardContent>
          
        </Card>
      );
}

export default Traffic;