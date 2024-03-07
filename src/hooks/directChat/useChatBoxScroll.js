import { useEffect } from 'react';

const useChatBoxScroll = (ref, deps) => {
  useEffect(() => {
    if (ref.current) {
      const { offsetHeight, scrollHeight, scrollTop } = ref.current;
      if (scrollHeight <= scrollTop + offsetHeight + 100) {
        ref.current?.scrollTo(0, scrollHeight);
      }
    }
  }, [deps, ref]);
};

export default useChatBoxScroll;
