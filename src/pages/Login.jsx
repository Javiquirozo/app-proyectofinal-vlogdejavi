import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Modal, Box } from '@mui/material';

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

    // Buscar el usuario por email en el array de usuarios
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Iniciar sesión
      try {
        await login(user.email, user.password);
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
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
      <h1>¡Bienvenid@! Inicia sesión</h1>
      <h2>En este blog encontrarás muchas recetas y material exclusivo para lograr llevar una alimentación más saludable.</h2>
      <Button variant="contained" onClick={handleOpen}>
        Iniciar sesión
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
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
            />
            <br />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <Button variant="contained" type="submit">
              Iniciar sesión
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;



