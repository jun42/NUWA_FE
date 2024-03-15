import { debounce } from 'lodash';
import { useEffect, useMemo, useRef } from 'react';

const useDebounce = (callback, dealy) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, dealy);
  }, []);

  return debouncedCallback;
};

export default useDebounce;
