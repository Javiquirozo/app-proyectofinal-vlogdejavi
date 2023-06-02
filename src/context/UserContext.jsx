import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const initialStateUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [user, setUser] = useState(initialStateUser);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const getUsers = async () => {
    const res = await fetch("users.json");
    const users = await res.json();
    return users;
  };

  const login = async (email, password) => {
    const users = await getUsers();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      throw new Error("Usuario no existe");
    }

    setUser(foundUser);
    return foundUser;
  };

  const register = (user) => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const getCursos = async () => {
    const res = await fetch("/cursosdecocina.json");
    const cursos = await res.json();
    return cursos;
  };

  const addToCart = ({ nameOfClass, schedule, price }) => {
    const productoEcontradoIndex = carrito.findIndex(
      (p) => p.nameOfClass === nameOfClass
    );
    const producto = { nameOfClass, schedule, price, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        carrito,
        addToCart,
        increment,
        decrement,
        login,
        register,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;




