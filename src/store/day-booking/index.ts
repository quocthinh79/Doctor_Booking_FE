import { create } from "zustand";

export const useDayBooking = create((set) => ({
  dayBooking: new Date(),
  setDayBooking: (dayBooking: Date) => set({ dayBooking }),
}));
