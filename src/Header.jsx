import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TapasTwoToneIcon from "@mui/icons-material/TapasTwoTone";

const Header = () => {
  return (
    <Box
      sx={{
        minWidth: "275px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "10px 30px",
        alignItems: "flex-start",
        margin: "40px 10px 10px 10px",
        border: "4px solid #044778",
        boxShadow: "2px 2px 4px #000000", // Optional: Add border for visualization
      }}
    >
      <TapasTwoToneIcon
        sx={{
          margin: "5px",
        }}
      />
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontSize: "3rem",
          fontWeight: "bolder",
          color: "#044778",
        }}
      >
        Dashboard
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "525",
          mb: 1.5,
          padding: "5px 10px",
        }}
        color="text.secondary"
      >
        Welcome to your dashboard
      </Typography>
    </Box>
  );
};

export default Header;
