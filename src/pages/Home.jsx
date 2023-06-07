import { useContext, useState } from "react";
import { CursosContext } from "../context/CursosContext";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CursosDeCocina from "../components/CursosDeCocina";
import HeaderHome from "../components/HeaderHome";
import FooterImg from "../components/FooterImg";
import InstagramReel from "../components/InstagramReel"

const Home = () => {
  const { cursos } = useContext(CursosContext);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Box sx={{ paddingTop: "40px" }}>
        <HeaderHome />
      </Box>
      <Box sx={{ paddingY: "60px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Cursos de Cocina
        </Typography>

        <Box sx={{ paddingY: "8px" }}>
          <TextField
            type="text"
            placeholder="Buscar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <CursosDeCocina
        cursosDeCocina={
          searchText === ""
            ? cursos
            : cursos.filter((curso) =>
                curso.nameOfClass
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              )
        }
      />

      <FooterImg />
      <div>
        <InstagramReel />
      </div>
    </>
  );
};

export default Home;




