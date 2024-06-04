import axios from "axios";
import { useState, useMemo } from "react";

const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const [movies, setMovies] = useState;
export const createFetch = async () => {
  const response = await axios(BASE_URL, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjU3MmZhN2U4NmE5M2IzNDFjZDRhNjBlN2RlODY4MSIsInN1YiI6IjY2MTU5OGVkOGVlMGE5MDE3ZWE1YWQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xyLjFeUC0brGiMOK3r0HVQWM4MxPSUQI3Gt8NJ5St0",
    },
  });
  (prev) => {
    setMovies([...prev, ...response.data.results]);
  };
  return response.data.results;
};

export const getMovieById = (id) => {
  const idMovie = useMemo(
    () => movies.filter((movie) => movie.id.includes(id)),
    [movies, id]
  );
  return idMovie;
};
