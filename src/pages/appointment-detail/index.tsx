import { apiAppointmentDoctorDetail } from "@api";
import { Title } from "@components";

import { EButtonTypes, IAppointmentDetailRes, routerPathFull } from "@core";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, Form, Input, InputNumber, Radio } from "antd";
import { Link, useParams } from "react-router-dom";

export function AppointmentDetail() {
  let { idAppointment } = useParams();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { data } = useQuery<IAppointmentDetailRes>({
    queryKey: ["appointmentDetail"],
    queryFn: () => apiAppointmentDoctorDetail({ id: Number(idAppointment) }),
    onSuccess(data) {
      console.log("🚀 ~ file: index.tsx:18 ~ onSuccess ~ data:", data);
    },
  });
  console.log("🚀 ~ file: index.tsx:22 ~ AppointmentDetail ~ data:", data);

  return (
    <Card style={{ width: "800px", textAlign: "center", margin: "auto" }}>
      <Title level={2}>Chi tiết lịch hẹn</Title>
      <Form {...layout} name="nest-messages" style={{ maxWidth: 600 }}>
        <Form.Item
          name={["user", "name"]}
          label="Họ tên"
          rules={[{ required: true }]}
        >
          {data?.patientName}
        </Form.Item>
        <Form.Item name={["user", "gender"]} label="Giới tính">
          {data?.patientGender}
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          {data?.patientEmail}
        </Form.Item>
        <Form.Item
          name={["user", "phone"]}
          label="Số điện thoại"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          {data?.patientPhone}
        </Form.Item>
        <Form.Item name={["user", "date"]} label="Ngày đặt">
          {`${new Date(data?.dateBooking || "").toDateString()} - ${new Date(
            data?.dateEnd || ""
          ).toDateString()}`}
        </Form.Item>
        <Form.Item name={["user", "description"]} label="Mô tả triệu chứng">
          {data?.description}
        </Form.Item>
      </Form>
      <Link to={routerPathFull.appointment.root}>
        <Button type={EButtonTypes.Primary}>Trở lại</Button>
      </Link>
    </Card>
  );
}

export default AppointmentDetail;
