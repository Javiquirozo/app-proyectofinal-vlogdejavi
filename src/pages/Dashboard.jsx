import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { CursosContext } from "../context/CursosContext";

// En el dashboard el usuario registrado puede agregar cursos de cocina

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const {createCurso, cursos, deleteCurso} = useContext(CursosContext);

  const [nameOfClass, setNameOfClass] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [instructor, setInstructor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCurso = {
        nameOfClass,
        description,
        price,
        instructor,
        schedule,
        location,
        id: Date.now(),
        user: user.email
    }
    createCurso(newCurso)
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center" gutterBottom>
        ¡Hola {user.name}!
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
            <Button variant="contained" type="submit" fullWidth>
              Agregar curso
            </Button>
          </Grid>
        </Grid>
      </form>

      <div>
          {cursos
          .filter((curso) => curso.user === user.email)
          .map((curso) => (
              <section key={curso.id}>
                  <h3>{curso.nameOfClass}</h3>
                  <button onClick={() => deleteCurso(curso.id)}>
                      Eliminar
                      </button>
                  <button>
                      Editar
                      </button>
              </section>
          ))}
      </div>
    </Container>
  );
};

export default Dashboard;
