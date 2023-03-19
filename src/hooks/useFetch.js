import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data1, setData] = useState(null);
  const [isLoading1, setIsLoading] = useState(true);
  const [error1, setError] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
      }

      fetchData()
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data1, isLoading1, error1 };
};
