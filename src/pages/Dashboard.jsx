import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Container, Grid, Typography, Card, CardContent, CardActions } from "@mui/material";
import { CursosContext } from "../context/CursosContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createCurso, cursos, deleteCurso } = useContext(CursosContext);
  const navigate = useNavigate();

  const [nameOfClass, setNameOfClass] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [instructor, setInstructor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCurso = {
      nameOfClass,
      description,
      price,
      instructor,
      schedule,
      id: Date.now(),
      user: user.email
    };
    createCurso(newCurso);
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: "4rem", paddingBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" align="center" gutterBottom>
        ¡Bienvenid@ {user.name}!
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Completa este formulario para agregar tu nuevo curso de cocina.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre del curso"
              fullWidth
              value={nameOfClass}
              onChange={(e) => setNameOfClass(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripción"
              fullWidth
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio"
              fullWidth
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Instructor"
              fullWidth
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Horario"
              fullWidth
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="URL de la imagen"
              fullWidth
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#9A659B",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#9A659B",
                },
              }}
            >
              Agregar curso
            </Button>
          </Grid>
        </Grid>
      </form>

      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        {cursos
          .filter((curso) => curso.user === user.email)
          .map((curso) => (
            <Grid item xs={12} sm={6} md={4} key={curso.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ marginBottom: "1rem" }}>
                    {curso.nameOfClass}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                    Instructor: {curso.instructor}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                    Descripción: {curso.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                    Horario: {curso.schedule}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                    Precio: {curso.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<DeleteIcon />}
                    sx={{
                      color: "#9A659B",
                    }}
                    onClick={() => deleteCurso(curso.id)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    sx={{
                      color: "#9A659B",
                    }}
                    onClick={() => navigate(`/update/${curso.id}`)}
                  >
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;



