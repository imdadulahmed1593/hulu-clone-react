import { MovieSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Results.css";
import FlipMove from "react-flip-move";
import VideoCard from "./VideoCard";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
