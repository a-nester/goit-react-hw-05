export const MovieList = (movies) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li>
            <a href={movie.link}></a>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
