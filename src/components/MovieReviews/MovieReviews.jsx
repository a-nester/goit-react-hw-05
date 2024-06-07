import { useEffect, useState } from "react";
import { getMovieReview } from "../../apiFetch";
import { useLocation, useParams } from "react-router-dom";

export const MovieReview = () => {
  const [movieReview, setMovieReview] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const movieId = location.state;

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await getMovieReview(movieId);
        setMovieReview(data.results);
      } catch (error) {
        setError(true);
      }
    };
    handleFetch();
  }, [movieId]);
  console.log(movieReview);
  return (
    <div>
      {movieReview.map((el) => {
        return (
          <>
            <p>Author: {el.author}</p>
            <p>Review: {el.content}</p>
          </>
        );
      })}
    </div>
  );
};

export default MovieReview;
