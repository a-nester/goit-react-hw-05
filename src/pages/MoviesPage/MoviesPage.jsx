import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getMovieBySearch } from "../../apiFetch";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export const MoviesPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoader(true);
        const data = await getMovieBySearch(searchParams.get("query"));
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, [searchParams]);

  const handleSearch = (value) => {
    const valueToLowerCase = value.trim().toLowerCase();
    const backParam = value !== "" ? { query: valueToLowerCase } : {};
    setSearchParams(backParam);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {<MovieList movies={movies} state={searchParams} />}
    </>
  );
};

export default MoviesPage;
