import { useRef } from "react";

function useDebounce(callback, delay) {
  const debounceTimer = useRef(null);

  return function (this, ...args) {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

export default useDebounce