export const createWorkspaceNameSlice = (set) => ({
  workspace: {
    workSpaceName: '',
    workSpaceImage: '',
    workSpaceIntroduce: '',
    workSpaceMemberName: '',
    workSpaceMemberJob: '',
    workSpaceMemberImage: '',
  },
  setWorkspace: (newWorkspace) => set(() => ({ workspace: newWorkspace })),
  newWorkSpaceId: null,
  setNewWorkSpaceId: (id) => set(() => ({ newWorkSpaceId: id })),
});
