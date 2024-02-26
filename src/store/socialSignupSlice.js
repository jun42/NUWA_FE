//todo 변수명 너무 추상적임 변경예정
export const createSocialSignupSlice = (set) => ({
  email: '',
  provider: '',
  setSocialEmail: (email) => set(() => ({ email })),
  setSocialProvider: (provider) => set(() => ({ provider })),
  resetSocialSignupInfo: () => set(() => ({ email: '', provider: '' })),
});
