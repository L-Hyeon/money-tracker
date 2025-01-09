import { create } from 'zustand';

interface StatusInfo {
  isModalActive: boolean;

  setIsModalActive: (status: boolean) => void;
}

export const statusStore = create<StatusInfo>(set => ({
  isModalActive: false,
  setIsModalActive: status => {
    set({ isModalActive: status });
  },
}));
