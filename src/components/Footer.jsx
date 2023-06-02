import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const {} = useContext(UserContext);

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
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
