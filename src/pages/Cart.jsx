import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Typography, Card, CardContent, CardActions, Button, Divider, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { carrito, addToCart, increment, decrement } = useContext(UserContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  if (carrito.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 64px)',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          No hay elementos en el carrito.
        </Typography>
        <img
          src="https://sheinsz.ltwebstatic.com/she_dist/images/cart/sui_img_empty_cart%20-2164551cbe.png"
          alt="Empty Cart"
          width="200px"
          height="200px"
          style={{ marginBottom: '1rem' }}
        />
        <Typography variant="body2" sx={{ fontSize: '1rem', color: '#666666', textAlign: 'center' }}>
          Tu carrito de compras está vacío
          <br />
          ¡Explora los cursos disponibles!
        </Typography>
        <Button
          variant="contained"
          component="a"
          href="/"
          size="large"
          sx={{
            backgroundColor: '#6BB29C',
            color: 'white',
            marginTop: '2rem',
            '&:hover': {
              backgroundColor: '#4D8D78',
            },
          }}
        >
          Ir a los cursos
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', paddingTop: '20px' }}>Detalle del pedido</Typography>
      <Box display="flex" flexDirection="column" alignItems="center" padding="20px">
        {carrito.map((curso, i) => (
          <Card key={i} sx={{ my: 2, width: '600px' }}>
            <CardContent>
              <img src={curso.img} alt="Imagen del producto" style={{ width: '100%', marginBottom: '1rem' }} />
              <Typography variant="h6">{curso.nameOfClass}</Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">{curso.price * curso.count}</Typography>
              <Button
                size="small"
                startIcon={<DeleteIcon />}
                onClick={() => decrement(i)}
                sx={{ color: '#9A659B' }}
              >
                Eliminar
              </Button>
              <Typography variant="body1">{curso.count}</Typography>
              <Button
                size="small"
                onClick={() => increment(i)}
                sx={{ color: '#6BB29C', fontWeight: 'bold' }}
              >
                Agregar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Typography variant="h6" sx={{ textAlign: 'center', paddingBottom: '20px' }}>Total: {total}</Typography>
      <Box display="flex" justifyContent="center" paddingBottom="20px">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            backgroundColor: '#9A659B',
            color: 'white',
            '&:hover': {
              backgroundColor: '#7D4786',
            },
          }}
        >
          Ir a pagar
        </Button>
      </Box>
    </>
  );
};

export default Cart;
