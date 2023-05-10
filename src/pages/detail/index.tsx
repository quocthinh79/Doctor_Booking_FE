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
} from "@core";
import { LeftRightLayout } from "@compositions";
export function DetailPage() {
  return (
    <LeftRightLayout
      leftChildren={
        <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
          <Card>
            <Calendar/>
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
            <Title level={3}>Họ tên BS</Title>
            <Description>
            <DescriptionItem label="Chức vụ"></DescriptionItem>
            </Description>
            <Description column={1} title="THÔNG TIN BÁC SĨ">
              <DescriptionItem label="Chuyên khoa: "></DescriptionItem>
              <DescriptionItem label="Kinh nghiệm: "></DescriptionItem>
              <DescriptionItem label="SĐT"></DescriptionItem>
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
