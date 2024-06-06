import { useParams } from "react-router-dom";
import { getMovieById } from "../apiFetch";
import { useEffect, useState } from "react";

export const MovieDetailsPage = () => {
  //   const [movie, setMovie] = useState();
  //   const { movieID } = useParams();
  //   useEffect(() => {
  //     const handleFetch = async () => {
  //       try {
  //         const movieById = await getMovieById(movieID);
  //         // setMovie(() => {
  //         //   [...movieById];
  //         // });
  //         // console.log(movieById);
  //       } catch (error) {
  //         console.log("Error");
  //       }
  //     };
  //     handleFetch();
  //   }, [movieID]);
  return (
    <div>
      {/* {movie} */}
      {/* {movieID} */}
    </div>
  );
};

export default MovieDetailsPage;
