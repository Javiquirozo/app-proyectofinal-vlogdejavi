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

    if (user) {
      try {
        await login(user.email, user.password);
        navigate("/dashboard");
      } catch (error) {
        // Manejar el error de inicio de sesión aquí
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
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh', 
          overflow: 'hidden', 
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
          alt="Imagen"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            paddingTop: '10px', 
            paddingBottom: '10px', 
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1, // Asegurar que el contenido aparezca por encima de la imagen
            textAlign: 'center',
            color: 'white',
            p: 4,
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            ¡Bienvenid@! Inicia sesión
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            En este blog encontrarás muchas recetas, cursos y material exclusivo para lograr llevar una alimentación más saludable.
            </Typography>
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
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#6BB29C',
            color: 'white',
            boxShadow: 24,
            p: 4,
            width: 400, // Ancho del modal
          }}
        >
          <Typography variant="h6" align="center" sx={{ mb: 2 }}>
            ¡Bienvenid@! Inicia sesión con tu correo electrónico
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
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
                mt: 2, // Margen superior
              }}
            >
              Iniciar sesión
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
            </Typography>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;

