import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Card 
    sx={{
        minWidth: '275px',
        height: '200px', // Set the height to 300px
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Space between the content and the edges
      }}
    >
      <CardContent>
        <Typography variant="h3" component="div">
          Dashboard
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Welcome to your dashboard
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Header;