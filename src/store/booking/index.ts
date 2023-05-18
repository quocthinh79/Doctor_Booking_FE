import { create } from "zustand";

export const useBooking = create((set) => ({
  dayBooking: new Date(),
  setDayBooking: (dayBooking: Date) => set({ dayBooking }),

  doctorId: "",
  setDoctorId: (doctorId: string) => set({ doctorId }),
}));
