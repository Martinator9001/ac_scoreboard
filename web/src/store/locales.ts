import { create } from 'zustand';

type Locales = {
  [key: string]: string;
};

interface State {
  locales: Locales;
  setLocales: (data: Locales) => void;
  t: (key: string) => string;
}

export const useLocales = create<State>((set, get) => ({
  locales: {},
  setLocales: (data) => set({ locales: data }),
  t: (key: string) => get().locales[key] ?? key,
}));
