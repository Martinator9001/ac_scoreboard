import { create } from 'zustand';

interface State {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const useVisibility = create<State>((set) => ({
  visible: false,
  setVisible: (value) => set({ visible: value }),
}));
