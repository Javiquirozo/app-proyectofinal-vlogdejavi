import { useContext, useEffect, useState } from "react";
import { CursosContext } from "../context/CursosContext";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { TextField, Button, Grid } from "@mui/material";

const Update = () => {
  const { id } = useParams();
  const { cursos, updateCurso } = useContext(CursosContext);
  const { user } = useContext(UserContext);

  const [nameOfClass, setNameOfClass] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [instructor, setInstructor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const findCurso = cursos.find((item) => item.id === id);

    setNameOfClass(findCurso.nameOfClass);
    setDescription(findCurso.description);
    setPrice(findCurso.price);
    setInstructor(findCurso.instructor);
    setSchedule(findCurso.schedule);
    setImg(findCurso.img);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      nameOfClass,
      description,
      price,
      instructor,
      schedule,
      img,
      id: id,
      user: user.email,
    };
    updateCurso(newProduct);
    console.log("editado");
  };

  return (
    <div>
      <h1>Actualizar producto</h1>

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
              Actualizar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Update;