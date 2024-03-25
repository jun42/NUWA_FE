import { useEffect } from 'react';

const useChatBoxScrollToBottom = (ref, deps, messageIndex) => {
  useEffect(() => {
    if (ref.current && messageIndex === 0) {
      const { scrollHeight } = ref.current;
      ref.current?.scrollTo(0, scrollHeight);
    }
  }, [deps, ref]);
};

export default useChatBoxScrollToBottom;
