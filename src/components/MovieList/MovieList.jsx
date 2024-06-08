import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  //   const location = useLocation();
  return (
    <ul>
      {movies.map(
        ({
          id,
          title,
          poster_path,
          popularity,
          release_date,
          vote_average,
        }) => {
          const idItem = nanoid();
          return (
            <li key={idItem} className={css.listItem}>
              <Link to={`/movies/${id}`}>
                <div className={css.itemBox}>
                  {
                    <img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    />
                  }
                  <div className={css.infoBox}>
                    <ul>
                      <li>Title: {title}</li>
                      <li>Popularuty: {popularity}</li>
                      <li>Release date: {release_date}</li>
                      <li>IMDB rate: {vote_average}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default MovieList;
