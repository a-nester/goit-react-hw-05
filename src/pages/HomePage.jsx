import MoviesPage from "../pages/MoviesPage";
import { createFetch } from "../apiFetch";

import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await createFetch();
        setMovies(() => [...data]);
      } catch (error) {
        setError(true);
      }
    };
    handleFetch();
  }, []);

  return (
    <main>
      <MoviesPage movies={movies} />
    </main>
  );
}
