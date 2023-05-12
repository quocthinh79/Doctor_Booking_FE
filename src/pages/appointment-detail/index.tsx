import { Title } from "@components";
import { Button, Card, Form, Input, InputNumber, Radio } from "antd";

export function AppointmentDetail() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    return (

        <Card style={{ width: "800px",
            textAlign: "center",
            margin: "auto"}}>
            <Title level={2}>Chi tiết lịch hẹn</Title>
            <Form
                {...layout}
                name="nest-messages"
                style={{ maxWidth: 600 }}
            >
                <Form.Item name={['user', 'name']} label="Họ tên" rules={[{ required: true }]}>
                    
                </Form.Item>
                <Form.Item name={['user', 'gender']} label="Giới tính">
                    <Radio.Group name="gender" defaultValue={1}>
                        <Radio value={true}>Nữ</Radio>
                        <Radio value={false}>Nam</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    
                </Form.Item>
                <Form.Item name={['user', 'phone']} label="Số điện thoại" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    
                </Form.Item>
                <Form.Item name={['user', 'date']} label="Ngày đặt">
                   
                </Form.Item>
                <Form.Item name={['user', 'description']} label="Mô tả triệu chứng">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    );
}

export default AppointmentDetail;
