import { Avatar, List } from "antd";
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
import { Link } from "react-router-dom";
export function AppointmentPage() {
  const data = [
    {
      name: 'Ant Design Title 1',
      date: '2021-1-9'
    },
    {
      name: 'Ant Design Title 2',
      date: '2021-1-9'
    },
    {
      name: 'Ant Design Title 3',
      date: '2021-1-9'
    },
    {
      name: 'Ant Design Title 4',
      date: '2021-1-9'
    },
  ];

  return (
    <Card>
      <Title level={2}>Danh sách lịch hẹn</Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <Link to={`/appointment/0`}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                title={<a href="">{item.name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"

              />
              <div>Date: {item.date}</div>
            </List.Item>
          </Link>

        )}
      />
    </Card>
  );
}

export default AppointmentPage;
