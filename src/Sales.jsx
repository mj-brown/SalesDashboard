import Typography from "@mui/material/Typography";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { mockTransactions } from "../mockData";
import Box from "@mui/material/Box";

const calculateTotalSales = () => {
  const totalSales = mockTransactions.length;
  return totalSales;
};

const Sales = () => {
  const totalSales = calculateTotalSales();

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
      <ShoppingCartTwoToneIcon
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
        {totalSales}
      </Typography>
      <Typography
        sx={{
          mb: 1.5,
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        color="text.secondary"
      >
        Sales Obtained
      </Typography>
    </Box>
  );
};

export default Sales;
