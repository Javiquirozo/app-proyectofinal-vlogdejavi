import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#6BB29C',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>
        <Link
          href="https://www.instagram.com/vlogdejavi"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#BCCC5E' } }}
        >
          @vlogdejavi
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;





