import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderHome = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1493807879848-13f1500cee7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 2 }}>
        Blog de recetas
      </Typography>
      <Typography variant="h6" sx={{ color: 'white', mb: 4 }}>
        En este blog encontrarás muchas recetas, cursos y material exclusivo para lograr llevar una alimentación más saludable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/login"
        sx={{ bgcolor: '#9A659B' }}
      >
        Iniciar sesión
      </Button>
    </Box>
  );
};

export default HeaderHome;


