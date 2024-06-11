import { useEffect, useState } from "react";
import { getMovieCast } from "../../apiFetch";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { nanoid } from "nanoid";

export const MovieCast = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const movieId = useLocation().state;
  useEffect(() => {
    const handleFetch = async () => {
      setError(false);
      setLoader(true);
      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, [movieId]);
  return (
    <>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movieCast.map((el) => {
        const itemId = nanoid();
        return (
          <div key={itemId}>
            {el.profile_path && (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                  alt="cast_img"
                />
                <p>{el.name}</p>
                <p>{el.character}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MovieCast;
