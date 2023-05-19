export interface IAddBookingReq {
  doctorId: number;
  patientId: number;
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  dateBooking: string;
  description: string;
  timeBooking: string;
}
