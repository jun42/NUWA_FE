
export const createWorkspaceNameSlice = (set) => ({
    workspace:{workspaceName: '', userInfo: {name:'', jobName:'',profile:''}},
    setWorkspace: (newWorkspace) => set(() => ({ workspace:newWorkspace })),

  });
  