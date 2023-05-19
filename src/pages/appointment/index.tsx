import { Card, Space, Title } from "@components";
import { useStorageToken } from "@store";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Divider, List } from "antd";
import { Link } from "react-router-dom";
import {
  IAppointmentRes,
  apiAppointmentPatient,
  apiAppointmentDoctor,
  EDirectionType,
} from "@core";
export function AppointmentPage() {
  const { id, role, name } = useStorageToken();

  const { data } =
    role === "Patient"
      ? useQuery<IAppointmentRes[]>({
          queryKey: ["appointmentPatient"],
          queryFn: () => apiAppointmentPatient({ id: Number(id) }),
        })
      : useQuery<IAppointmentRes[]>({
          queryKey: ["appointmentDoctor"],
          queryFn: () => apiAppointmentDoctor({ id: Number(id) }),
        });

  return (
    <Card>
      <Title level={2}>
        {" "}
        Danh sách lịch hẹn của {role === "Doctor" ? "bác sĩ" : "bạn"}
      </Title>
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
                title={
                  <a href={`/appointment/${item.id}`}>{item.patientName}</a>
                }
                description={item.description}
              />
              <Space direction={EDirectionType.Vertical}>
                <div>Email: {item.patientEmail}</div>
                <div>Giới tính: {item.patientGender}</div>
                <div>SĐT: {item.patientPhone}</div>
                <div>Trạng thái: {item.status}</div>
                <span>Ngày đặt: {item.dateBooking} </span>
                <div>
                  Thời gian khám: {`${item.timeBooking}h -> ${item.timeEnd}h`}
                </div>
              </Space>
            </List.Item>
            <Divider />
          </Link>
        )}
      />
    </Card>
  );
}

export default AppointmentPage;
