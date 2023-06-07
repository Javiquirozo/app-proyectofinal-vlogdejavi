import { createContext, useEffect, useState } from "react";

export const CursosContext = createContext();

const initialCursoState = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : []

console.log('initialCursoState');
console.log(initialCursoState);

const CursosProvider = ({ children }) => {
  const [cursos, setCursos] = useState(initialCursoState);

    const getCursos = async () => {
      const res = await fetch("./cursosdecocina.json");

      console.log('res', res);

      const data = await res.json();
      setCursos(data);
    };

    useEffect(() => {
      if(cursos.length === 0) {
        getCursos();
        }
      }, [])

    useEffect(() => {
      localStorage.setItem('cursos', JSON.stringify(cursos));
    }, [cursos])

    const createCurso = (curso) => {
      // chatgpt: setCursos ( [...cursos, newCurso]);
      setCursos([curso, ...cursos])
    };

    const deleteCurso = (id) => {
      const newCursos = cursos.filter((curso) => curso.id !== id);
      setCursos(newCursos);
    };

    const updateCurso = (newCurso) => {
      console.log('ke pasa');
      console.log('newCurso', newCurso);

      const newCursos = cursos.map((curso) => {
        if (curso.id === newCurso.id) {
          return newCurso;
        }
        return curso;
      });

      setCursos(newCursos);
    };

  return (
    <CursosContext.Provider
      value={{
        cursos,
        createCurso,
        deleteCurso,
        updateCurso
        }}
      >
        {children}
    </CursosContext.Provider>
  );
};

export default CursosProvider
