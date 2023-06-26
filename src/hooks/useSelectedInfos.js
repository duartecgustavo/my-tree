import { create } from 'zustand';

export const useSelectedInfos = create((set) => ({
    infos: 'Selecione um tema',
    setInfo: (info) => set({ infos: info }),
}));
