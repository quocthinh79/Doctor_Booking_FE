import {
  IAddBookingReq,
  IAppointmentByDateReq,
  IAppointmentDetailReq,
  IAppointmentReq,
} from "@core";
import instanceAxios from "../instance-axios";

export const apiAppointmentDoctor = ({ id }: IAppointmentReq) => {
  return instanceAxios.get(`/appointment/doctor/${id}`).then((res) => res.data);
};

export const apiAppointmentDoctorDetail = ({ id }: IAppointmentDetailReq) => {
  return instanceAxios.get(`/appointment/detail/${id}`).then((res) => res.data);
};

export const apiAppointmentPatient = ({ id }: IAppointmentReq) => {
  return instanceAxios
    .get(`/appointment/patient/${id}`)
    .then((res) => res.data);
};

export const apiAppointmentByDate = ({ id, date }: IAppointmentByDateReq) => {
  return instanceAxios
    .get("/appointment/doctor/date", {
      params: {
        id,
        date,
      },
    })
    .then((res) => res.data);
};

export const apiAddBooking = ({
  dateBooking,
  description,
  doctorId,
  email,
  fullName,
  gender,
  patientId,
  phone,
  timeBooking,
}: IAddBookingReq) => {
  const passProps = {
    dateBooking,
    description,
    doctorId,
    email,
    fullName,
    gender,
    patientId,
    phone,
    timeBooking,
  };

  return instanceAxios
    .post("/appointment", { ...passProps })
    .then((res) => res.data);
};
