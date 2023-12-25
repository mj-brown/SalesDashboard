import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import { mockTransactions } from "../mockData";

const calculateNewClients = () => {
  // Assuming each user is considered a new client
  const uniqueClients = Array.from(
    new Set(mockTransactions.map((transaction) => transaction.user))
  );
  const totalNewClients = uniqueClients.length;

  return totalNewClients;
};

const Clients = () => {
  const totalNewClients = calculateNewClients();
  return (
    <Box
      sx={{
        minWidth: "275px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px 30px",
        border: "4px solid #044778",
        boxShadow: "2px 2px 4px #000000",
      }}
    >
      <PersonAddAltTwoToneIcon
        sx={{
          margin: "5px 0px",
        }}
      />

      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "900",
          fontSize: "2rem",
          color: "#044778",
        }}
      >
        {totalNewClients}
      </Typography>
      <Typography
        sx={{
          mb: 1.5,
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        color="text.secondary"
      >
        New Clients
      </Typography>
    </Box>
  );
};

export default Clients;
