import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as true for the initial load
  const [error, setError] = useState(null); // Initialize as null for better error handling

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on each fetch
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err); // Store the error
      } finally {
        setLoading(false); // Set loading to false in finally block
      }
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    setError(null); // Reset error state before refetching
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err); // Store the error
    } finally {
      setLoading(false); // Set loading to false in finally block
    }
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
