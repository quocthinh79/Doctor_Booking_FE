import { Calendar } from "antd";
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
  apiDoctorDetail,
} from "@core";
import { LeftRightLayout } from "@compositions";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
export function DetailPage() {
  let { idDoctor } = useParams();
  const { data } = useQuery<IDoctorDetailRes>({
    refetchOnWindowFocus: false,
    queryKey: ["detailDoctor"],
    queryFn: () => apiDoctorDetail({ id: Number(idDoctor) }),
    onSuccess(data) {
      console.log("🚀 ~ file: index.tsx:25 ~ onSuccess ~ data:", data);
    },
  });

  const { degree, email, phone, specialize, user_name } = data || {};

  return (
    <LeftRightLayout
      leftChildren={
        <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
          <Card>
            <Calendar />
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
              <Button block type={EButtonTypes.Primary}>
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
