import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { createFetch } from "./apiFetch";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieID" element={<MovieDetailsPage />}>
          <Route path="moviecast" element={<MovieCast />} />
          <Route path="moviereview" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
