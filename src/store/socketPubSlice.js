export const createDirectMessageSlice = (set) => ({
  publish: null,
  setPublish: (publish) =>
    set(() => {
      publish;
    }),
});
