import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sales from './Sales';
import Clients from './Clients';
import Traffic from './Traffic';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const KPI = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><Sales /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Clients /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Traffic /></Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default KPI;