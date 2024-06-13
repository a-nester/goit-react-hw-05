import { useEffect, useState } from "react";
import { getMovieReview } from "../../apiFetch";
import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { nanoid } from "nanoid";

export const MovieReview = () => {
  const [movieReview, setMovieReview] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { movieID } = useParams();

  useEffect(() => {
    const handleFetch = async () => {
      setError(false);
      setLoader(true);
      try {
        const data = await getMovieReview(movieID);
        setMovieReview(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, [movieID]);
  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movieReview.map((el) => {
        const itemId = nanoid();
        return (
          <div key={itemId}>
            <p>Author: {el.author}</p>
            <p>Review: {el.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieReview;
