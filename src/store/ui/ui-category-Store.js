import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUIStore = create(
  persist(
    (set, get) => ({
      listcategory: "",
      setlistcategory: (category) => {
        set(() => ({
          listcategory: category,  
        }));
      },
    }),
    {
      name: 'ui-store', 
      getStorage: () => sessionStorage, 
    }
  )
);