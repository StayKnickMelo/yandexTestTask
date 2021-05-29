import  { useState, useEffect } from 'react'

const useDebounce = (val, delay) => {

  const [debouncedValue, setDebouncedValue] = useState(val);

  useEffect(
    () => {

      const handler = setTimeout(() => {
        setDebouncedValue(val);
      }, delay);


      return () => {
        clearTimeout(handler);
      };
    },

    // eslint-disable-next-line
    [val]
  );

  return debouncedValue;
};

export default useDebounce;

