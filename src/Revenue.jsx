import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { mockTransactions } from "../mockData";

const calculateTotalRevenue = (transactions) => {
  // Use reduce to sum up the cost values
  const totalRevenue = transactions.reduce((sum, transaction) => {
    // Parse the cost value to a float and add it to the sum
    return sum + parseFloat(transaction.cost);
  }, 0);

  // Round the total revenue to 2 decimal places
  return totalRevenue.toFixed(2);
};

const Revenue = () => {
  const totalRevenue = calculateTotalRevenue(mockTransactions);
  return (
    <Card
      sx={{
        minWidth: "275px",
        height: "340px", // Set the height to 300px
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        alignItems: "flex-start",
        textAlign: "left",
        padding: "20px 30px",
        border: "4px solid #044778",
        boxShadow: "2px 2px 4px #000000",
      }}
    >
      <CardContent>
        <MonetizationOnTwoToneIcon
          sx={{
            margin: "5px 0px",
          }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bolder",
            fontSize: "2rem",
            color: "#044778",
          }}
        >
          {`$${totalRevenue}`}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          color="text.secondary"
        >
          Revenue Generated
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Revenue;
