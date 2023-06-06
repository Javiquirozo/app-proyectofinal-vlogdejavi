import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Modal, Box, Typography } from '@mui/material';

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Iniciar sesión
      try {
        await login(user.email, user.password);
        navigate('/dashboard');
      } catch (error) {
      } 
    } else {
      // La contraseña no coincide o el usuario no existe
      console.log('Usuario o contraseña incorrectos');
    }

    handleClose();
  };

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener el archivo JSON
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        ¡Bienvenid@! Inicia sesión
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        En este blog encontrarás muchas recetas y material exclusivo para lograr llevar una alimentación más saludable.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            backgroundColor: '#9A659B',
            color: 'white',
            mr: 2,
            '&:hover': {
              backgroundColor: '#BCCC5E',
              color: 'white',
            },
          }}
        >
          Iniciar sesión
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/register"
          sx={{
            backgroundColor: '#9A659B',
            color: 'white',
            '&:hover': {
              backgroundColor: '#BCCC5E',
              color: 'white',
            },
          }}
        >
          Registrarse
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#9A659B',
            color: 'white',
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <br />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#9A659B',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#BCCC5E',
                  color: 'white',
                },
              }}
            >
              Iniciar sesión
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
