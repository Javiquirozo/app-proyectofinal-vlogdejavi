import { useContext, useState } from "react";
import { CursosContext } from "../context/CursosContext"; 
import CursosDeCocina from "../components/CursosDeCocina";

const Home = () => {
  const { cursos } = useContext(CursosContext);
  const [searchText, setSearchText] = useState('')

  return (
    <>
      <div>
        <h2>Cursos de Cocina</h2>
        <input 
        type="text" 
        placeholder="Buscar"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        />
        <div>
        {cursos
          .filter((curso) =>
            curso.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((curso) => (
            <CursosDeCocina
              key={curso.id}
              curso={curso}
            />
          ))}

        </div>
      </div>
    </>
  );
};

export default Home;
