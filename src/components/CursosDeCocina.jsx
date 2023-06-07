import { useContext } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { UserContext } from "../context/UserContext";

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

const CursosDeCocina = ({ cursosDeCocina }) => {
  const { addToCart } = useContext(UserContext);

  return (
    <Grid container spacing={3} sx={{ margin: '20px auto' }}>
      {
        cursosDeCocina.map((curso) => (
          <Grid item xs={12} sm={6} md={4} key={curso.id}>
            <StyledCard>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                {curso.nameOfClass}
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image={curso.img}
                alt={curso.nameOfClass}
              />
              <CardContent>
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  {curso.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => addToCart(curso)}
                  sx={{ bgcolor: '#9A659B', color: 'white' }}
                >
                  Añadir al carrito
                </Button>
              </Box>
            </StyledCard>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default CursosDeCocina;




