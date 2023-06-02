import React, { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";


export const CursosContext = createContext();

const initialCursoState = localStorage.getItem('cursos') ?
JSON.parse(localStorage.getItem('cursos')) : []

const CursosProvider = ({ children }) => {
  const [cursos, setCursos] = useState(initialCursoState);

    const getCursos = async () => {
      const res = await fetch("./cursosdecocina.json");
      const data = await res.json();
      setCursos(data);
    };

    useEffect(() => {
      if(cursos.length === 0) {
        getCursos();
        }
      }, [])

    useEffect(() => {
      localStorage.setItem('cursos', JSON.stringify(cursos))
    }, [cursos])

    const createCurso = (newCurso) => {
      // chatgpt: setCursos ( [...cursos, newCurso]);
      setCursos([newCurso, ...cursos])
    };

    const deleteCurso = (id) => {
      const newCursos = cursos.filter(curso => curso.id !== id)
      setCursos(newCursos)
    }


  return (
    <CursosContext.Provider 
    value={{
        cursos,
        createCurso,
        }}>
      {children}
    </CursosContext.Provider>
  );
};

export default CursosProvider
  