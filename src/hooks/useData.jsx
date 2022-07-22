import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();

    axios.get(url, { signal: controller.signal })
      .then(({ data }) => setData(data))
      .catch(e => {
        if(e.name === 'AbortError') {
          console.log('Cancel');
        } else {
          setIsError(e);
        }
      })
      .finally(() => {
        setIsLoading(false);
      })

      return () => {
        controller.abort();
      };

  }, [url]);

  return [data, isLoading, isError];
};

export default useData;
