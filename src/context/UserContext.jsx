import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const initialStateUser = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: null;

const initialStateUsers = localStorage.getItem('users')
? JSON.parse(localStorage.getItem('users'))
: []

const UserProvider = ({ children }) => {

  const [users, setUsers] = useState ([initialStateUsers])
  const [user, setUser] = useState(initialStateUser);
  const [carrito, setCarrito] = useState([]);

  const getUsers = async () => {
    const res = await fetch("users.json");
    const users = await res.json();
    setUsers(users)
  };

  useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  useEffect(() => {
    if(users.length === 0) {
      getUsers();
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);


  const login = async (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser) {
      setUser(foundUser);
    } else {
      setUser(null);
    }

    return foundUser;
  };

  const register = (user) => {
    const foundUser = users.find(
      (user) => user.email === user.email
    );
    if (!foundUser) return true
    setUser(user);
    setUsers([...users, user])
    // localStorage.removeItem("user");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (user) => {
    setUser(user);
    const usersUpdate = users.map((item) =>
      item.id === user.id ? user : item
    );
    setUsers(usersUpdate);
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




