import { useState } from "react";

function FavoriteMovies() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([
    { id: 1, name: "Inception" },
    { id: 2, name: "Interstellar" },
    { id: 3, name: "The Dark Knight" },
  ]);

  function ajouterFilm(e) {
    e.preventDefault();
    const name = movieName;

    if (!name) return;

    const id = movies.reduce((largestId, movie) => Math.max(largestId, movie.id), 0) + 1;
    setMovies([...movies, { id, name }]);
    setMovieName("");
  }

  function supprimerFilm(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <main>
      <h1>Mes films favoris</h1>

      <form onSubmit={ajouterFilm}>
        <label htmlFor="movie-name">Nom du film</label>{" "}
        <input
          id="movie-name"
          type="text"
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
        />{" "}
        <button type="submit">Ajouter</button>
      </form>

      {movies.length === 0 ? (
        <p>Votre liste de favoris est vide</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.name}{" "}
              <button type="button" onClick={() => supprimerFilm(movie.id)}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default FavoriteMovies;