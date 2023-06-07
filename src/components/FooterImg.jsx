import { Box } from '@mui/material';

const FooterImg = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: '20px',
        overflow: 'hidden',
      }}
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1661587756187-94d7d893c3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        alt=""
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
      />
    </Box>
  );
};

export default FooterImg;
