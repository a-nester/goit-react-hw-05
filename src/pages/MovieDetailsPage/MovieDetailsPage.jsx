import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getMovieById } from "../../apiFetch";
import { useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export const MovieDetailsPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState([]);
  const { movieID } = useParams();

  const location = useLocation();
  const backLocation = useRef(location.state ?? "/movies");

  useEffect(() => {
    const handleFetch = async () => {
      setLoader(true);
      setError(false);
      try {
        const data = await getMovieById(movieID);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
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
    navigate(backLocation.current);
  };

  return (
    <div className={css.pageWrapper}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
