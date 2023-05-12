
import { Button, Card, Form, SizeProps, Space, Title } from "@components";
import {
    EButtonTypes,
    EDirectionType,
    EHtmlButtonTypes,
}
    from "@core";
import { useForm } from "antd/es/form/Form";
import { InformationDoctorBooking } from "./information-form";
// import { Form } from "antd";

export function FormContent() {
    const [form] = useForm();
    const onFinish = (values: any) => {
        try {
            //   schemaInformationAccount.parse(values);
            console.log("Success:", values);
        } catch (error) {
            console.log(error);
            //   handleSchemaError(error, form);
        }
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
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
    );
}
  export default FormContent ;