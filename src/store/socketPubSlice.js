export const createDirectMessageSlice = (set) => ({
  receiverId: null,
  setReceiverId: (receiverId) =>
    set((state) => ({
      receiverId: receiverId,
    })),
  publish: null,
  setPublish: (publish) =>
    set(() => {
      publish;
    }),
});
