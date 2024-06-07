import { useEffect, useState } from "react";
import { getMovieCast } from "../../apiFetch";
import { useLocation } from "react-router-dom";

export const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const movieId = useLocation().state;
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {}
    };
    handleFetch();
  }, [movieId]);
  return (
    <>
      {movieCast.map((el) => {
        return (
          <>
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
          </>
        );
      })}
    </>
  );
};

export default MovieCast;
