import MovieList from "../components/MovieList/MovieList";
import { createFetch } from "../apiFetch";

import { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoader(true);
        const data = await createFetch();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, []);
  console.log(movies);
  return (
    <main>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </main>
  );
}
