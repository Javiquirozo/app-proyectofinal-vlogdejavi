import { useContext } from "react";

const Favorites = () => {
  const { favorites, deleteFavorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.map((item) => (
        <article key={item.id}>
          <p>{item.nameOfClass}</p>
          <button onClick={() => deleteFavorites(item.id)}>Eliminar</button>
        </article>
      ))}
      {favorites.length === 0 && <p>No existen favoritos</p>}
    </div>
  );
};
export default Favorites;