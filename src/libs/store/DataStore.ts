import { create } from 'zustand';

interface DataInfo {
  selDate: Date;

  setSelDate: (date: Date) => void;
}

export const dataStore = create<DataInfo>(set => ({
  selDate: new Date(),

  setSelDate: (date: Date) => {
    set({ selDate: date });
  },
}));
