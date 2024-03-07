import { useEffect } from 'react';

const useChatBoxScrollToBottom = (ref, deps) => {
  useEffect(() => {
    if (ref.current) {
      const { scrollHeight } = ref.current;
      ref.current?.scrollTo(0, scrollHeight);
    }
  }, [deps, ref]);
};

export default useChatBoxScrollToBottom;
window.scrollTo();
