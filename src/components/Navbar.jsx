import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  const { carrito, user, logout } = useContext(UserContext);

  const total = carrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count,
    0
  );

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div>total del carrito</div>
      <Link to="/carrito">
        <h4>Total: {total}</h4>
      </Link>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
                VlogDeJavi
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="cart"
                color="inherit"
                component={NavLink}
                to="/carrito"
              >
                <ShoppingCartIcon />
              </IconButton>
              {user ? (
                <>
                  <IconButton
                    size="large"
                    aria-label="dashboard"
                    color="inherit"
                    component={NavLink}
                    to="/dashboard"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                    <button
                      onClick={handleLogout}
                      style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer' }}
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
                  <Typography variant="h6" noWrap component="div">
                    <NavLink
                      to="/login"
                      style={{ color: 'white', textDecoration: 'none' }}
                      activeclassname="active"
                    >
                      Login
                    </NavLink>
                  </Typography>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}