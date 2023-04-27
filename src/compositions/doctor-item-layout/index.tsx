import { doctorItemList } from "@dummy-data";
import { Pagination } from "../../components";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import DoctorCardItem from "../doctor-card-item";

export function DoctorItemLayout() {
  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      {doctorItemList?.map(({ phoneNumber, doctorName, linkAvatar }, index) => (
        <Col key={`${doctorName}${index}`} span={8}>
          <DoctorCardItem
            key={index}
            id={index}
            phoneNumber={phoneNumber}
            doctorName={doctorName}
            linkAvatar={linkAvatar}
          />
        </Col>
      ))}
      <Col span={SPACE_BETWEEN_ITEMS}>
        <Pagination
          current={1}
          defaultCurrent={1}
          pageSize={9}
          total={10}
          // onChange={handleChange}
        />
      </Col>
    </Row>
  );
}

export default DoctorItemLayout;
