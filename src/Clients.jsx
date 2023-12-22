import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const Clients = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <PersonAddAltIcon />
                
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

export default Clients;