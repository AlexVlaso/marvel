import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "aplication/json" }
    ) => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: headers,
        });
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e) {
        console.error(e.message);
        setError(e.message);
      }
    },
    []
  );

  return { loading, error, request };
};
