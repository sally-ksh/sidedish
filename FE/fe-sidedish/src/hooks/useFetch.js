import { useEffect, useState } from 'react';

const useFetch = (url, option) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async (url, option) => {
      const response = await fetch(url, option);
      const data = await response.json();
      setData(data);
    };
    fetchData(url, option);
  }, [url, option]);

  return data;
};

export { useFetch };
