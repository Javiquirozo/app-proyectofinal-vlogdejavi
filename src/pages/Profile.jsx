import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Grid, TextField } from "@mui/material";
import Swal from "sweetalert2";

const Profile = () => {
  const { user,  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    ({
      email: email,
      name: name,
      phone: phone,
      password: password,
      id: user.id,
    });

    Swal.fire("Datos actualizados");
  };

  return (
    <Container maxWidth="md" sx={{ py: "2rem" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight="100vh">
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            Tu perfil
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <section>
            <Button
              component={Link}
              to="/dashboard"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ bgcolor: "#9A659B", color: "#ffffff", "&:hover": { bgcolor: "#ffffff", color: "#9A659B" } }}
            >
              Agregar un curso de cocina nuevo
            </Button>
          </section>
        </Grid>

        <Grid item xs={12}>
          <section>
            <Typography variant="h4" gutterBottom align="center">
              Actualizar perfil
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Nombre"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Teléfono"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Contraseña"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ bgcolor: "#9A659B", color: "#ffffff", "&:hover": { bgcolor: "#ffffff", color: "#9A659B" } }}
                  >
                    Actualizar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
