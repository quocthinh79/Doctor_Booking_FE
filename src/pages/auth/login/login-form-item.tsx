import { InputPassword, InputText, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { Form } from "antd";
import { memo } from "react";

export function LoginFormItem() {
  return (
    <Space widthFull>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
      >
        <InputText />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
      >
        <InputPassword />
      </Form.Item>
    </Space>
  );
}

export default memo(LoginFormItem);
