import { create } from 'zustand';
import { createBearSlice, createFishSlice } from './testSlice';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const persisitKeys = ['bears'];

const persistOption = {
  name: 'food-storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  partialize: (state) =>
    Object.fromEntries(
      Object.entries(state).filter(([key]) => persisitKeys.includes(key))
    ),
};

const useBoundStore = create(
  // immer로 불변성 보장
  immer(
    devtools(
      persist(
        (...a) => ({
          ...createBearSlice(...a),
          ...createFishSlice(...a),
        }),
        persistOption
      )
    )
  )
);

//

export default useBoundStore;
