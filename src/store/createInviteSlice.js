export const createInviteSlice = (set) => ({
  isInvited: false,
  invitingWorkSpaceId: null,
  setIsInvited: (value) => set((state) => ({ ...state, isInvited: value })),
  setInvitingWorkSpaceId: (value) =>
    set((state) => ({ ...state, invitingWorkSpaceId: value })),
  resetInviteSlice: () =>
    set((state) => ({ ...state, invitingWorkSpaceId: null, isInvited: false })),
});
