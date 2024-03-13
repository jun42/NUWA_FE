export const createUserAuthSlice = (set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),
});
