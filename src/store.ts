import { create } from 'zustand';

type TeletextState = {
  page: number;
  input: string;
  crt: boolean;
  setInput: (value: string) => void;
  setPage: (page: number) => void;
  toggleCrt: () => void;
};

export const useTeletextStore = create<TeletextState>((set) => ({
  page: 300,
  input: '',
  crt: true,
  setInput: (input) => set({ input }),
  setPage: (page) => set({ page, input: '' }),
  toggleCrt: () => set((s) => ({ crt: !s.crt }))
}));
