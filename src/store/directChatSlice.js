export const createDirectChatSlice = (set) => ({
  isDirectChatBoxExpand: true,
  setIsDirectChatBoxExpand: (isExpand) =>
    set((state) => ({ ...state, isDirectChatBoxExpand: isExpand })),
});
