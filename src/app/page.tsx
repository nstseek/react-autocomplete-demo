"use client";

import React, { useCallback, useState } from "react";
import { Autocomplete } from "./components/Autocomplete";
import { useBrowserAlert } from "./hooks/useBrowserAlert";
import { Movie } from "./types/movie";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useBrowserAlert();

  const handleOnSelect = useCallback(
    (movie: Movie) => {
      setSelectedMovie(movie);
    },
    [setSelectedMovie]
  );

  return (
    <div className="container">
      <h4 className="header-text">
        Here you can see an autocomplete form that will look for results on the
        network while you type.
      </h4>
      <h5 className="header-text">Try it out!</h5>
      <Autocomplete onSelect={handleOnSelect} />
      {selectedMovie && <h5>You selected: {selectedMovie.title}</h5>}
    </div>
  );
}
