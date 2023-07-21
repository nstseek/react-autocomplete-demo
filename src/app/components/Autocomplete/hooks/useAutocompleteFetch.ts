import { Movie } from "@/app/types/movie";
import { useCallback, useEffect, useState } from "react";

const DebounceTime = 250;

export const useAutocompleteFetch = (query: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);
  const [nextRequestData, setNextRequestData] = useState<{
    controller: AbortController;
    query: string;
  } | null>(null);

  const prepareNextRequest = useCallback(
    (query: string) => {
      setNextRequestData({ controller: new AbortController(), query });
    },
    [setNextRequestData]
  );

  useEffect(() => {
    if (query) {
      prepareNextRequest(query);
    } else {
      setData([]);
      setIsLoading(false);
    }
  }, [query, prepareNextRequest, setData, setIsLoading]);

  useEffect(() => {
    if (nextRequestData === null) {
      return;
    }

    const timeoutID = setTimeout(() => {
      setIsLoading(true);

      fetch("/api/movies?query=" + nextRequestData.query, {
        signal: nextRequestData.controller.signal,
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch(() => {
          setIsLoading(false);
          setData([]);
        });
    }, DebounceTime);

    return () => {
      nextRequestData.controller.abort();
      clearTimeout(timeoutID);
      setIsLoading(false);
    };
  }, [nextRequestData, setIsLoading, setNextRequestData]);

  return { isLoading, data };
};
