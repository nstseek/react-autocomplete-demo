import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { AutocompleteSuggestions } from "./AutocompleteSuggestions";
import { Movie } from "@/app/types/movie";
import "./styles.css";
import { useAutocompleteFetch } from "./hooks/useAutocompleteFetch";

export const Autocomplete = ({
  onSelect,
}: {
  onSelect(movie: Movie): void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { isLoading, data: suggestions } = useAutocompleteFetch(inputValue);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      setInputValue(value);
    },
    [setInputValue]
  );

  const handleOnSelect = useCallback(
    (id: string) => {
      setShowSuggestions(false);
      onSelect(suggestions.find((movie) => movie.id === id)!);
    },
    [setShowSuggestions, onSelect, suggestions]
  );

  useEffect(() => {
    if (suggestions && suggestions.length) {
      setShowSuggestions(true);
    }
  }, [suggestions, setShowSuggestions]);

  return (
    <div className="autocomplete-container">
      <div className="autocomplete-input-container">
        {isLoading ? (
          <div className="autocomplete-input-loader">⏳</div>
        ) : (
          <div className="autocomplete-input-loaded">✅</div>
        )}
        <input
          className="autocomplete-input"
          value={inputValue}
          type="text"
          onChange={handleOnChange}
        />
      </div>
      {showSuggestions && (
        <AutocompleteSuggestions
          suggestions={suggestions}
          onSelect={handleOnSelect}
        />
      )}
    </div>
  );
};
