import { useContext } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { CursosContext } from "../context/CursosContext";

// Este componente es la lista de cursos de cocina en formato cards que debe verse en el Home de forma pública para cualquiera que entre a la app.
const CursosDeCocina = ({curso}) => {
  const { cursos, cursosdecocina, addToCart } = useContext(CursosContext);

  return (
    <Grid container spacing={3}>
      {cursosdecocina.map((curso) => (
        <Grid item xs={12} sm={6} md={4} key={curso.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={curso.image}
              alt={curso.nameOfClass}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {curso.nameOfClass}
              </Typography>
              <Typography color="textSecondary">
                Instructor: {curso.instructor}
              </Typography>
              <Typography variant="body2" component="p">
                {curso.description}
              </Typography>
              <Typography color="textSecondary">
                Schedule: {curso.schedule}
              </Typography>
              <Typography color="textSecondary">
                Location: {curso.location}
              </Typography>
              <Typography variant="h6" component="h3">
                Price: {curso.price}
              </Typography>
              <Button
                variant="contained"
                onClick={() => addToCart(curso)}
                fullWidth
              >
                Añadir al carrito
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CursosDeCocina;

