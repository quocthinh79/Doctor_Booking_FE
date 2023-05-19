import { InputText, RadioGroup, Radio, Space, SizeProps } from "@components";
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};
import { EMPTY_INPUT_ERROR, FORMAT_DATE_DEFAULT } from "@constant";
import { EDirectionType, apiAppointmentByDate, getRange } from "@core";
import { useBooking, useStorageToken } from "@store";
import { useQuery } from "@tanstack/react-query";
import { DatePicker, Form, TimePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";

export function InformationDoctorBooking() {
  const dayBooking = useBooking((state: any) => state?.dayBooking);
  const { id: patientId } = useStorageToken();
  const doctorId = useBooking((state: any) => state?.doctorId);

  const { data } = useQuery({
    queryKey: ["dateBooking"],
    queryFn: () =>
      apiAppointmentByDate({
        id: Number(doctorId),
        date: dayBooking,
      }),
    select(data) {
      return {
        hour: data
          ?.map((item: any) => {
            return getRange(item?.timeBooking, item?.timeEnd);
          })
          .flat(),
        // minute: data
        //   ?.map((item: any) => {
        //     return getRange(
        //       new Date(item?.dateBooking).getMinutes(),
        //       new Date(item?.dateEnd).getMinutes()
        //     );
        //   })
        //   .flat(),
      };
    },
  });

  return (
    <Space
      size={SizeProps.Middle}
      direction={EDirectionType.Vertical}
      widthFull
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="fullName"
        label="Họ tên"
      >
        <InputText placeholder="Nhập họ và tên" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="gender"
        label="Giới tính"
      >
        <RadioGroup name="gender">
          <Radio value="Nam">Nam</Radio>
          <Radio value="Nữ">Nữ</Radio>
        </RadioGroup>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="phone"
        label="Số điện thoại"
      >
        <InputText placeholder="Nhập số điện thoại" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="email"
        label="Email"
      >
        <InputText placeholder="Nhập email của bạn" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="timeBooking"
        label="Giờ"
      >
        <TimePicker
          format="HH:mm"
          disabledTime={() => ({
            disabledHours: () => data?.hour,
          })}
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="dateBooking"
        label="Ngày đặt"
        initialValue={dayjs(dayBooking)}
      >
        <DatePicker format={FORMAT_DATE_DEFAULT} />
      </Form.Item>
      <Form.Item name="description" label="Mô tả triệu chứng">
        <TextArea name="description">
          <TextArea rows={4} />
        </TextArea>
      </Form.Item>
    </Space>
  );
}
export default InformationDoctorBooking;
