import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getMovieBySearch } from "../../apiFetch";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export const MoviesPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoader(true);
        const data = await getMovieBySearch(
          searchParams.get("query") ?? searchValue
        );
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleFetch();
  }, [searchParams, searchValue]);

  const handleSearch = (value) => {
    const valueLower = value.trim().toLowerCase();
    setSearchValue(valueLower);
    const backParam = value !== "" ? { query: value } : {};
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
