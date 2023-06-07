import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { carrito, addToCart, increment, decrement } = useContext(UserContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  if (carrito.length === 0) {
    return <p>No hay elementos en el carrito.</p>;
  }

  return (
    <>
      <div>hola soy el carrito</div>
      <h3>Detalle del pedido</h3>
      <div>
        {carrito.map((curso, i) => (
          <div className="imgClaseDeCocina" key={i}>
            <img src={curso.img} alt="Imagen del producto" />
            <h6>{curso.nameOfClass}</h6>
            <div>
              <h6>{curso.price * curso.count}</h6>
              <button onClick={() => decrement(i)}>
                Eliminar
              </button>
              <b>{curso.count}</b>
              <button
                onClick={() => increment(i)}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;

