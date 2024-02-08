export const createSocialSignupSlice = (set) => ({
  email: '',
  provider: '',
  setSocialEmail: (email) => set(() => ({ email })),
  setSocialProvider: (provider) => set(() => ({ provider })),
  resetSocialSignupInfo: () => set(() => ({ email: '', provider: '' })),
});
