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
});
