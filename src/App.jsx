import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieID" element={<MovieDetailsPage />}>
            <Route path="moviecast" element={<MovieCast />} />
            <Route path="moviereview" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
