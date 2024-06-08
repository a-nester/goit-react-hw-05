import { Link, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../apiFetch";
import { useEffect, useState } from "react";
import { MovieReview } from "../components/MovieReviews/MovieReviews";

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieID } = useParams();
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
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
      <h2>{original_title}</h2>
      <p>Release date: {release_date}</p>
      <p>Popularity: {popularity}</p>
      <p>Overview: {overview}</p>
      <p>
        Genres:{genres.join(", ")}
      
        {/* {genres.map((genre) => {
          return genre.name;
        })} */}
      </p>

      {/* {<p>{movie.overview}</p>} */}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="moviecast" state={movieID}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="moviereview" state={movieID}>
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
