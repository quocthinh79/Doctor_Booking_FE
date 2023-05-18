import { Card, Title } from "@components";
import { useStorageToken } from "@store";
import { useQuery } from "@tanstack/react-query";
import { Avatar, List } from "antd";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import { IAppointmentRes, apiAppointmentPatient } from "@core";
export function AppointmentPage() {
  const { id } = useStorageToken();

  const { data } = useQuery<IAppointmentRes[]>({
    queryKey: ["appointmentPatient"],
    queryFn: () => apiAppointmentPatient({ id: Number(id) }),
=======
import { IAppointmentRes, apiAppointmentPatient, apiAppointmentDoctor } from "@core";
export function AppointmentPage() {
  const { id, role, name } = useStorageToken();

  const { data } = role === "Patient" ? useQuery<IAppointmentRes[]>({
    queryKey: ["appointmentPatient"],
    queryFn: () => apiAppointmentPatient({ id: Number(id) }),
  }) : useQuery<IAppointmentRes[]>({
    queryKey: ["appointmentDoctor"],
    queryFn: () => apiAppointmentDoctor({ id: Number(id) }),
>>>>>>> Stashed changes
  });

  return (
    <Card>
<<<<<<< Updated upstream
      <Title level={2}>Danh sách lịch hẹn của bệnh nhân</Title>
=======
      <Title level={2}> Danh sách lịch hẹn của {role === "Doctor" ? "bác sĩ" : "bạn"}</Title>
>>>>>>> Stashed changes
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <Link to={`/appointment/${item.id}`}>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={<a href="">{item.patientName}</a>}
                description={item.description}
                children={
                  <>
                    <div>Doctor ID: {item.doctor_id}</div>
                    <div>Patient email: {item.patientEmail}</div>
                    <div>Patient gender: {item.patientGender}</div>
                    <div>Patient name: {item.patientName}</div>
                    <div>Patient phone: {item.patientPhone}</div>
                    <div>Patient ID: {item.patient_id}</div>
                    <div>Status: {item.status}</div>
                  </>
                }
              />
              <div>Date Booking: {item.dateBooking}</div>
              <div>End Date: {item.dateEnd}</div>
            </List.Item>
          </Link>
        )}
      />
    </Card>
  );
}

export default AppointmentPage;
