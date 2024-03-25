import { useEffect } from 'react';

const useChatBoxScroll = (ref, deps) => {
  useEffect(() => {
    if (ref.current) {
      const { offsetHeight, scrollHeight, scrollTop } = ref.current;
      if (scrollHeight <= scrollTop + offsetHeight + 100) {
        setTimeout(() => {
          ref.current?.scrollTo(0, scrollHeight);
        }, 300);
      }
    }
  }, [deps, ref]);
};

export default useChatBoxScroll;
