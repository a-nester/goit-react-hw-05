import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
export const createFetch = async () => {
  const response = await axios(BASE_URL, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjU3MmZhN2U4NmE5M2IzNDFjZDRhNjBlN2RlODY4MSIsInN1YiI6IjY2MTU5OGVkOGVlMGE5MDE3ZWE1YWQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xyLjFeUC0brGiMOK3r0HVQWM4MxPSUQI3Gt8NJ5St0",
    },
  });

  return response.data.results;
};

export const getMovieById = async (id) => {
  const response = await axios(BASE_URL, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjU3MmZhN2U4NmE5M2IzNDFjZDRhNjBlN2RlODY4MSIsInN1YiI6IjY2MTU5OGVkOGVlMGE5MDE3ZWE1YWQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xyLjFeUC0brGiMOK3r0HVQWM4MxPSUQI3Gt8NJ5St0",
      id: { id },
    },
  });
  console.log(response.data);
  return response.data.results;
};
