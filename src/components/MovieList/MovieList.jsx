// import { createFetch } from "../../apiFetch";

export const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <>
            <li>
              <a href={movie.title}>{movie.title}</a>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default MovieList;
