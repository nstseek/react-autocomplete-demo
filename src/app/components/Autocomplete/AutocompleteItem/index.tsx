import { Movie } from "@/app/types/movie";
import { useCallback } from "react";
import "./styles.css";

export const AutocompleteItem = ({
  movie: { id, title },
  onClick,
}: {
  movie: Movie;
  onClick(id: Movie["id"]): void;
}) => {
  const handleOnClick = useCallback(() => onClick(id), [onClick, id]);

  return (
    <button type="button" onClick={handleOnClick} className="autocomplete-item">
      {title}
    </button>
  );
};
