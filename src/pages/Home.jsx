import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CursosContext } from "../context/CursosContext"; // Importa el contexto CursosContext

import CursosDeCocina from "./CursosDeCocina";
import Cart from "./Cart";

const Home = () => {

  const { cursos } = useContext(CursosContext);

  return (
    <>
      <div>Home</div>
      <CursosDeCocina />
    </>
  );
};

export default Home;
