export const createDirectMessageSlice = (set) => ({
  receiverId: null,
  setRecieverId: (receiverId) =>
    set(() => {
      receiverId;
    }),
  publish: null,
  setPublish: (publish) =>
    set(() => {
      publish;
    }),
});
