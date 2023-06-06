import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box, Container, Modal } from "@mui/material";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { register, login } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const user = register({
      name,
      email,
      phone,
      password,
      id: Date.now(),
    });

    if (user) {
      try {
        await login(user.email, user.password);
        navigate("/dashboard");
      } catch (error) {
        // Manejar el error de inicio de sesión aquí
      }
    } else {
      // La contraseña no coincide o el usuario no existe
    }

    setSuccess(true);
  };

  if (success) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Registro de usuario
        </Typography>
        {error && (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            label="Nombre completo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            sx={{ mt: 2 }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ mt: 2 }}
          />
          <TextField
            label="Teléfono"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required
            sx={{ mt: 2 }}
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            sx={{ mt: 2 }}
          />
          <TextField
            label="Confirmar contraseña"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            required
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              backgroundColor: '#6BB29C',
              color: 'white',
              '&:hover': {
                backgroundColor: '#BCCC5E',
                color: 'white',
              },
            }}
          >
            Registro
          </Button>
        </Box>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          ¿Ya tienes una cuenta? <Link to="/login">Accede</Link>
        </Typography>
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
          <Typography variant="h6">Registro exitoso</Typography>
          <Typography variant="body1">¡El registro se ha completado con éxito!</Typography>
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Register;







