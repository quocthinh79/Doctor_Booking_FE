import {
  InputText,
  RadioGroup,
  Radio,
  Space,
  SizeProps,
}
  from "@components";
const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};
import { EMPTY_INPUT_ERROR, FORMAT_DATE_DEFAULT } from "@constant";
import { EDirectionType } from "@core";
import { DatePicker, Form, TimePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
export function InformationDoctorBooking() {
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
        name="name"
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
        name="sex"
        label="Giới tính"
      >
        <RadioGroup name="sex">
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
      </Form.Item >
      <Form.Item
        rules={[{
          required: true,
          message: EMPTY_INPUT_ERROR,
        },
        ]}
        name="time-picker"
        label="Giờ">
        <TimePicker format="HH:mm" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="day"
        label="Ngày đặt"
      >
        <DatePicker format={FORMAT_DATE_DEFAULT} />
      </Form.Item>
      <Form.Item
        name="textArea"
        label="Mô tả triệu chứng"
      >
        <TextArea name="textArea">
          <TextArea rows={4} />
        </TextArea>
      </Form.Item>
    </Space>
  );
}
      export default InformationDoctorBooking;