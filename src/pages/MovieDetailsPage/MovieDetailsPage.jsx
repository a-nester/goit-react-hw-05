import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getMovieById } from "../../apiFetch";
import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieID } = useParams();

  const location = useLocation();
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await getMovieById(movieID);
        setMovie(data);
      } catch (error) {
        console.log("Error");
      }
    };
    handleFetch();
  }, [movieID]);

  const {
    poster_path,
    original_title,
    release_date,
    popularity,
    overview,
    genres,
  } = movie;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location.state);
  };

  return (
    <div className={css.pageWrapper}>
      <button onClick={handleClick}>Go back</button>
      <img
        className={css.poster}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w200${poster_path}`
            : `/src/assets/imdb_originals.jpg`
        }
      ></img>
      <h2>{original_title}</h2>
      <p>Release date: {release_date}</p>
      <p>Popularity: {popularity}</p>
      <p>Overview: {overview}</p>
      <p>Genre: {movie.genres && genres.map((el) => el.name).join(" ")}</p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={movieID}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={movieID}>
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
