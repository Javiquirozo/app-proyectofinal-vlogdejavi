import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { user, carrito, addToCart, increment, decrement } = useContext(UserContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  if (carrito.length === 0) {
    return <p>No hay elementos en el carrito.</p>;
  }

  return (
    <>
      <div>hola soy el carrito</div>
      <h3>Detalle del pedido</h3>
      <div>
        {carrito.map((producto, i) => (
          <div className="imgClaseDeCocina" key={i}>
            <img src={producto.img} alt="Imagen del producto" />
            <h6>{producto.name}</h6>
            <div>
              <h6>{producto.price * producto.count}</h6>
              <button onClick={() => decrement(i)}>
                Decrementar
              </button>
              <b>{producto.count}</b>
              <button
                onClick={() => increment(i)}
              >
                Incrementar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;

