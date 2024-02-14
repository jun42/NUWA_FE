//https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

/**
 *
 * @param {function} callback the callback to execute at interval
 * @param {number} delay the `setInterval` delay (in ms)
 *
 */
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;

// chakra ui 예시
// import { useEffect } from "react"
// import { useCallbackRef } from "./use-callback-ref"

// /**
//  * React Hook that provides a declarative `setInterval`
//  *
//  * @param callback the callback to execute at interval
//  * @param delay the `setInterval` delay (in ms)
//  */
// export function useInterval(callback: () => void, delay: number | null) {
//   const fn = useCallbackRef(callback)

//   useEffect(() => {
//     let intervalId: number | null = null
//     const tick = () => fn()
//     if (delay !== null) {
//       intervalId = window.setInterval(tick, delay)
//     }
//     return () => {
//       if (intervalId) {
//         window.clearInterval(intervalId)
//       }
//     }
//   }, [delay, fn])
// }
