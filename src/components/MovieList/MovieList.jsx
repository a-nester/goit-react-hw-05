import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => {
        const id = nanoid();
        return (
          <div key={id}>
            <Link to={movie.id} state={location}>
              {movie.title}
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default MovieList;
