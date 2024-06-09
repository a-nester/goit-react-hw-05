import MovieList from "../../components/MovieList/MovieList";
import { createFetch } from "../../apiFetch";

import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [trendPeriod, setTrendPeriod] = useState("day");
  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoader(true);
        const data = await createFetch(trendPeriod);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, [trendPeriod]);

  const handleChange = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    setTrendPeriod(value);
    console.log(trendPeriod);
  };

  return (
    <main>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {
        <form className={css.form} onChange={handleChange}>
          Top 20 on IMDb of this
          <select name="period">
            <option value="day">Day</option>
            <option value="week">Week</option>
          </select>
        </form>
      }
      <MovieList movies={movies} />
    </main>
  );
}
