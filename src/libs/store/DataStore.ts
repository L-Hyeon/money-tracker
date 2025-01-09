import { create } from 'zustand';

interface DataInfo {
  today: Date;
  selDate: Date;

  setSelDate: (date: Date) => void;
}

export const dataStore = create<DataInfo>(set => ({
  today: new Date(),
  selDate: new Date(),

  setSelDate: (date: Date) => {
    set({ selDate: date });
  },
}));
