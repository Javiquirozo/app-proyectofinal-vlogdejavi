import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#6BB29C',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src="ruta_de_la_imagen.jpg" alt="footer" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>
        VlogDeJavi
      </Typography>
    </Box>
  );
};

export default Footer;

