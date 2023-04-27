import {
  BadgeRibbon,
  Card,
  Description,
  DescriptionItem,
  Image,
  Title,
} from "@components";
import { Link } from "react-router-dom";

export interface DoctorCardItemProps {
  linkAvatar?: string;
  doctorName?: string;
  phoneNumber?: string;
  id?: any;
}

export function DoctorCardItem({
  id = 1,
  phoneNumber = "0985764536",
  doctorName = "Lenovo Legion 5 Pro 2022",
  linkAvatar = "",
}: DoctorCardItemProps) {
  return (
    <Link to={`/detail/${id}`}>
      <BadgeRibbon text="Bác sĩ giỏi" color="red">
        <Card hoverable>
          <Image placeholder={doctorName} preview={false} src={linkAvatar} />
          <Title level={4}>{doctorName}</Title>
          <Description>
            <DescriptionItem
              contentStyle={{ fontWeight: 700 }}
              label="Số điện thoại"
            >
              {`${phoneNumber.substring(0, 7)}***`}
            </DescriptionItem>
          </Description>
        </Card>
      </BadgeRibbon>
    </Link>
  );
}

export default DoctorCardItem;
