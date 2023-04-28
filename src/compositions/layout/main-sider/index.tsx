import { Sider } from "@components";
import styled from "@emotion/styled";
import { useSelectedTag } from "@hooks";
import SiderItem from "./sider-item";
import { EOrderTags } from "@core";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

const StyledContainer = styled("div")`
  .ant-layout-sider {
    background-color: inherit;
  }
`;

export function MainSider() {
  const { handleChange, selectedTags } = useSelectedTag();

  return (
    <StyledContainer>
      <Sider width={300}>
        <Collapse defaultActiveKey={["1", "2", "3"]}>
          <CollapsePanel header="Giới tính" key="1">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Gender}
              children={["Nam", "Nữ"]}
            />
          </CollapsePanel>
          <CollapsePanel header="Chuyên khoa" key="2">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Specialize}
              children={["Tâm thần", "Nữ"]}
            />
          </CollapsePanel>
          <CollapsePanel header="Học vị" key="3">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Degree}
              children={["TS.BS", "GS.TS.BS"]}
            />
          </CollapsePanel>
        </Collapse>
      </Sider>
    </StyledContainer>
  );
}

export default MainSider;
