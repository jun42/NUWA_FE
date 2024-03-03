import { useMutation } from '@tanstack/react-query';
import { createProfile } from '@apis/user/createProfile';

export const useImage = () => {
  const mutation = useMutation({mutationFn: createProfile});

  return {mutation};
};
