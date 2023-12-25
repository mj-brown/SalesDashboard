import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SignpostTwoToneIcon from "@mui/icons-material/SignpostTwoTone";
import { mockTransactions } from "../mockData";

const calculateTraffic = () => {
  const totalTraffic = mockTransactions.length;

  return totalTraffic;
};

const Traffic = () => {
  const totalTraffic = calculateTraffic();
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
      <SignpostTwoToneIcon
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
        {totalTraffic}
      </Typography>
      <Typography
        sx={{
          mb: 1.5,
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        color="text.secondary"
      >
        Traffic Received
      </Typography>
    </Box>
  );
};

export default Traffic;
