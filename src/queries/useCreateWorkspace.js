import { useMutation } from '@tanstack/react-query';
import { createWorkspace } from '@apis/workspace/createWorkspace';

export const useCreateWorkspace = () => {
  const mutation = useMutation({mutationFn: createWorkspace});

  return {mutation};
};
