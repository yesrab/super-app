import React from "react";
import exampleImage from "../assets/exampleMovie.png";
import { useQuery } from "@tanstack/react-query";
function Genres({ genre, genreID }) {
  const BaseURL = "https://image.tmdb.org/t/p/w500";

  const { data: movies } = useQuery({ queryKey: [genreID], queryFn: getMovie, staleTime: 60000 });

  async function getMovie() {
    const responce = await fetch(`/api/movie?g=${genreID}`);
    const data = await responce.json();

    return data;
  }

  return (
    <div className='movieGalaryContainer'>
      <p>{genre}</p>
      <div className='galary'>
        {movies?.results.map((movie) => {
          return <img key={movie.id} src={BaseURL + movie.backdrop_path} />;
        })}
      </div>
    </div>
  );
}

export default Genres;
