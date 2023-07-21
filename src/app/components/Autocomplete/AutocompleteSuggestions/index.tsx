import { Movie } from "@/app/types/movie";
import { AutocompleteItem } from "../AutocompleteItem";
import "./styles.css";

export const AutocompleteSuggestions = ({
  suggestions,
  onSelect,
}: {
  suggestions: Movie[];
  onSelect(id: Movie["id"]): void;
}) => {
  return (
    <div className="autocomplete-suggestions">
      {suggestions.map((movie) => (
        <AutocompleteItem movie={movie} key={movie.id} onClick={onSelect} />
      ))}
    </div>
  );
};
