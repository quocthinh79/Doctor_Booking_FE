import { create } from "zustand";
import { persist } from "zustand/middleware";

const createTokenSlice = (set: any, get: any) => ({
  token: "",
  setToken: (token: string) => set({ token }),
  isValid: () => get().token.length > 0,

  id: "",
  setId: (id: string) => set({ id }),
  role: "",
  setRole: (role: string) => set({ role }),
  name: "",
  setName: (name: string) => set({ name }),
});

export const useStorageToken = create(
  persist(createTokenSlice, {
    name: "token",
  })
);
