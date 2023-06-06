import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const {} = useContext(UserContext);

  return (
    <Box
      sx={{
        backgroundColor: '#6BB29C',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Typography variant="body2" align="center">
        Hola, soy el footer
      </Typography>
    </Box>
  );
};

export default Footer;

