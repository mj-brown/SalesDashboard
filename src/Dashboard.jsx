import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from "./Header";
import KPI from './KPI';
import Revenue from './Revenue';
import Transactions from './Transactions';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><Header /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><KPI /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Revenue /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Transactions /></Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Dashboard;