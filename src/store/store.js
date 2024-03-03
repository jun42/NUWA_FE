import { create } from 'zustand';
import { createBearSlice } from './testSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSocialSignupSlice } from './socialSignupSlice';
import { createWorkspaceNameSlice } from './createWorkspaceNameSlice';
import { createUserAuthSlice } from './userAuthSlice';
import { createDirectMessageSlice } from './socketPubSlice';

const persistKeys = ['email', 'provider', 'workspace'];

const persistOption = {
  name: 'NUWA-Storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  partialize: (state) =>
    Object.fromEntries(
      Object.entries(state).filter(([key]) => persistKeys.includes(key))
    ),
};

const useBoundStore = create(
  // immer로 불변성 보장
  immer(
    devtools(
      persist(
        (...a) => ({
          ...createBearSlice(...a),
          ...createSocialSignupSlice(...a),
          ...createWorkspaceNameSlice(...a),
          ...createUserAuthSlice(...a),
          ...createDirectMessageSlice(...a),
        }),
        persistOption
      )
    )
  )
);

//

export default useBoundStore;
