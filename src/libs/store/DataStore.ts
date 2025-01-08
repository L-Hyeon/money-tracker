import { create } from 'zustand';

interface UserInfo {
  selYear: number;
  selMonth: number;

  setSelYear: (val: number) => void;
  setSelMonth: (val: number) => void;
}

export const userStore = create<UserInfo>(set => ({
  selYear: new Date().getFullYear(),
  selMonth: new Date().getMonth(),

  setSelYear: (val: number) => {
    set({ selYear: val });
  },
  setSelMonth: (val: number) => {
    set({ selMonth: val });
  },
}));
