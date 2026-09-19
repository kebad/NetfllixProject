import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utills/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setmovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_Url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setmovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    origin: window.location.origin,
    },
  };

    const handleclick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
          (url) => {
            console.log(url);
            if (url) {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v")); // የ v=... ን ID ብቻ ይወስዳል
              console.log(urlParams);
            } else {
              console.log("Trailer not found");
            }
          },
        );
      }
    }


  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies?.map((movie) => (
          <img
          onClick={() => handleclick(movie)}

            key={movie.id}
            className={`row_poster ${isLarge ? "row_posterLarge" : ""}`}
            src={`${base_Url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name || movie?.title || movie?.original_name}
          />
        ))}
      </div>
      {/* trailerUrl ካለ ብቻ ቪዲዮውን ያጫውታል */}
      <div style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};



export default Row;
