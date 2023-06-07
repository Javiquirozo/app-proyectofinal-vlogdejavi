import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const { carrito, user, logout } = useContext(UserContext);

  const total = carrito.reduce((valorAnterior, { count, price }) => (valorAnterior + price) * count, 0);

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#6BB29C' }}>
      <Toolbar>
        {/* imagen del logo */}
        <img src="" alt="Logo" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
            VlogDeJavi
          </NavLink>
        </Typography>
        <Link to="/carrito">
          <Typography variant="h6" component="div" sx={{ color: 'white', mr: 2 }}>
            Total: {total}
          </Typography>
        </Link>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {user ? (
            <>
              <IconButton
                size="large"
                aria-label="profile"
                color="inherit"
                component={NavLink}
                to="/profile"
              >
                <AccountCircleIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                <button
                  onClick={handleLogout}
                  style={{
                    color: 'white',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </button>
              </Typography>
            </>
          ) : (
            <>
              <IconButton
                size="large"
                aria-label="login"
                color="inherit"
                component={NavLink}
                to="/login"
              >
                <AccountCircleIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                <NavLink
                  to="/login"
                  style={{ color: 'white', textDecoration: 'none' }}
                  activeclassname="active"
                >
                  {/* Login */}
                </NavLink>
              </Typography>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

