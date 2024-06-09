import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjU3MmZhN2U4NmE5M2IzNDFjZDRhNjBlN2RlODY4MSIsInN1YiI6IjY2MTU5OGVkOGVlMGE5MDE3ZWE1YWQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xyLjFeUC0brGiMOK3r0HVQWM4MxPSUQI3Gt8NJ5St0";
export const createFetch = async (trendPeriod) => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/trending/movie/${trendPeriod}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
  });

  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/movie/${id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
  });

  return response.data;
};

export const getMovieBySearch = async (searchValue) => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/search/movie`,
    params: { query: searchValue },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
  });
  return response.data;
};

export const getMovieCast = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/movie/${id}/credits`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
  });

  return response.data;
};

export const getMovieReview = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/movie/${id}/reviews`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
  });

  return response.data;
};
