// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';

// const cursos = [
//   {
//     id: 1,
//     title: 'Producto 1',
//     image: 'imagen1.jpg',
//     price: 10.99,
//   },
//   {
//     id: 2,
//     title: 'Producto 2',
//     image: 'imagen2.jpg',
//     price: 19.99,
//   },
//   {
//     id: 3,
//     title: 'Producto 3',
//     image: 'imagen3.jpg',
//     price: 7.99,
//   },
// ];

// const CursosView = () => {
//   return (
//     <Grid container spacing={2}>
//       {cursos.map((curso) => (
//         <Grid item key={curso.id} xs={12} sm={6} md={4} lg={3}>
//           <Card>
//             <CardMedia component="img" height="200" image={curso.image} alt={curso.title} />
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 {curso.title}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 Precio: ${curso.price}
//               </Typography>
//             </CardContent>
//             <Button component={Link} to="/cart" variant="contained" fullWidth>
//               Agregar al carrito
//             </Button>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default CursostView;
