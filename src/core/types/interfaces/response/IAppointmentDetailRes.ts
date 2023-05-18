export interface IAppointmentDetailRes {
  id: number;
  patientName: string;
  patientGender: string;
  patientPhone: string;
  patientEmail: string;
  dateBooking: string;
  dateEnd: string;
  status: string;
  doctor_id: number;
  patient_id: number;
  description: string;
}
