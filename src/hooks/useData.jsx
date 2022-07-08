import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  
  useEffect(() => {
    axios.get(url)
      .then(({ data }) => setData(data))
      .catch((err) => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [url]);

  return [data, isLoading, isError];
};

export default useData;
