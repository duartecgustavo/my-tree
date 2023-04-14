import { create } from 'zustand'

export const useHandleState = create((set) => ({
    view: true,
    setView: (view) => set({ view }),
}));
