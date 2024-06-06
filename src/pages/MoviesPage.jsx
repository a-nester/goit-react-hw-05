import { Link, Outlet, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { getMovieBySearch } from "../apiFetch";
import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const MoviesPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoader(true);
        const data = await getMovieBySearch(searchValue);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, [searchValue]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  //   const location = useLocation();
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {searchValue.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
