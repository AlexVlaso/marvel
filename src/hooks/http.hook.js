import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "aplication/json" }
    ) => {
      try {
        setLoading(true);
        setProcess("loading");
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: headers,
        });
        if (!response.ok) {
          throw Error(response.status);
        }
        const data = await response.json();
        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        setProcess("error");
      }
    },
    []
  );
  const clearError = () => {
    setError(null);
  };

  return { loading, error, request, process, clearError, setProcess };
};
