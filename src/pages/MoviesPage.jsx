import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

export const MoviesPage = ({ movies }) => {
  //   const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => {
        const id = nanoid();
        return (
          <div key={id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </div>
        );
      })}
    </ul>
  );
};

export default MoviesPage;
