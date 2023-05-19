import { Button, Card, Form, SizeProps, Space, Title } from "@components";
import {
  EButtonTypes,
  EDirectionType,
  EHtmlButtonTypes,
  apiAddBooking,
  routerPathFull,
} from "@core";
import { useForm } from "antd/es/form/Form";
import { InformationDoctorBooking } from "./information-form";
import { useBooking, useStorageToken } from "@store";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
// import { Form } from "antd";

export function FormContent() {
  const [form] = useForm();
  const { id: patientId } = useStorageToken();
  const doctorId = useBooking((state: any) => state?.doctorId);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const onFinish = async ({
    timePicker,
    dateBooking,
    timeBooking,
    ...restData
  }: any) => {
    try {
      //   schemaInformationAccount.parse(values);
      console.log(dayjs(timeBooking).hour());
      await addBooking({
        ...restData,
        doctorId,
        patientId,
        dateBooking: dayjs(dateBooking).toDate(),
        timeBooking: dayjs(timeBooking).hour(),
      });
      setTimeout(() => {
        navigate(routerPathFull.home.root + "/");
      }, 1000);
    } catch (error) {
      console.log(error);
      //   handleSchemaError(error, form);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { mutate: addBooking } = useMutation({
    mutationKey: ["addBooking"],
    mutationFn: apiAddBooking,
    onSuccess(data, variables, context) {
      api.success({
        message: "Đặt lịch thành công",
        description: data,
      });
    },
  });

  return (
    <>
      {contextHolder}
      <Card>
        <Title level={2}>Đặt lịch hẹn</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Space
            size={SizeProps.Large}
            direction={EDirectionType.Vertical}
            widthFull
          >
            <Space
              size={SizeProps.Small}
              direction={EDirectionType.Vertical}
              widthFull
            >
              <InformationDoctorBooking />
            </Space>
            <Button
              htmlType={EHtmlButtonTypes.Submit}
              type={EButtonTypes.Primary}
            >
              Gửi
            </Button>
          </Space>
        </Form>
      </Card>
    </>
  );
}
export default FormContent;
