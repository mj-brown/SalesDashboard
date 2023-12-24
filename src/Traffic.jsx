import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SignpostIcon from '@mui/icons-material/Signpost';

const Traffic = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <SignpostIcon />
                
            <Typography variant="h5" component="div">
              Pace holder for value
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              New Clients
            </Typography>
            
          </CardContent>
          
        </Card>
      );
}

export default Traffic;