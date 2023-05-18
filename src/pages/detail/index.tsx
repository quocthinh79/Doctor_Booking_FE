import { Calendar, Form } from "antd";
import {
  Button,
  Card,
  Description,
  DescriptionItem,
  Divider,
  Flex,
  Row,
  Space,
  Title,
  Image,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EButtonTypes,
  EDirectionFlex,
  IDoctorDetailRes,
  apiAppointmentByDate,
  apiDoctorDetail,
  routerPathFull,
} from "@core";
import { LeftRightLayout } from "@compositions";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import dayjs, { Dayjs } from "dayjs";
import { useBooking } from "@store";
export function DetailPage() {
  let { idDoctor } = useParams();
  const setDoctorId = useBooking((state: any) => state.setDoctorId);
  const { data } = useQuery<IDoctorDetailRes>({
    refetchOnWindowFocus: false,
    queryKey: ["detailDoctor"],
    queryFn: () => apiDoctorDetail({ id: Number(idDoctor) }),
    onSuccess(data) {
      console.log("🚀 ~ file: index.tsx:25 ~ onSuccess ~ data:", data);
    },
  });

  const { degree, email, phone, specialize, user_name } = data || {};

  const navigate = useNavigate();

  const [form] = useForm();
  const setDayBooking = useBooking((state: any) => state?.setDayBooking);

  const onFinish = (values: any) => {
    console.log(
      "🚀 ~ file: index.tsx:41 ~ onFinish ~ values:",
      dayjs(values.calendar).toDate()
    );
    setDayBooking(dayjs(values.calendar).toDate());
    setDoctorId(idDoctor || "");
    navigate(routerPathFull.booking.root);
  };

  const onChangeCalendar = (value: Dayjs) => {
    console.log(
      "🚀 ~ file: index.tsx:49 ~ onChange ~ value:",
      dayjs(value).toDate()
    );
  };

  return (
    <LeftRightLayout
      leftChildren={
        <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
          <Card>
            <Form form={form} onFinish={onFinish}>
              <Form.Item name={"calendar"} valuePropName="value">
                <Calendar onChange={onChangeCalendar} />
              </Form.Item>
            </Form>
          </Card>
        </Flex>
      }
      rightChildren={
        <Card>
          <Space>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Title level={3}>{user_name}</Title>
            <Description>
              <DescriptionItem label="Email">{email}</DescriptionItem>
            </Description>
            <Description column={1} title="THÔNG TIN BÁC SĨ">
              <DescriptionItem label="Chuyên khoa">
                {specialize}
              </DescriptionItem>
              <DescriptionItem label="Kinh nghiệm">{degree}</DescriptionItem>
              <DescriptionItem label="SĐT">{phone}</DescriptionItem>
            </Description>
          </Space>
          <Divider />
          <Space widthFull>
            <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
              <Button
                block
                type={EButtonTypes.Primary}
                onClick={() => form.submit()}
              >
                Đặt lịch ngay
              </Button>
            </Row>
          </Space>
        </Card>
      }
    />
  );
}

export default DetailPage;
