import Grid from "@mui/material/Grid";
import Header from "./Header";
import KPI from "./KPI";
import Revenue from "./Revenue";
import Transactions from "./Transactions";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <KPI />
      </Grid>
      <Grid item xs={8}>
        <Revenue />
      </Grid>
      <Grid item xs={4}>
        <Transactions />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
