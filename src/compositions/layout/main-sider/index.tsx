import { apiGetDegreeFilterItem, apiGetSpecializeFilterItem } from "@api";
import { Sider } from "@components";
import { EOrderTags, IFilterItemRes } from "@core";
import styled from "@emotion/styled";
import { useSelectedTag } from "@hooks";
import { useQuery } from "@tanstack/react-query";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import SiderItem from "./sider-item";

const StyledContainer = styled("div")`
  .ant-layout-sider {
    background-color: inherit;
  }
`;

export function MainSider() {
  const { handleChange, selectedTags } = useSelectedTag();

  const { data: dataSpecialize } = useQuery<IFilterItemRes[]>({
    queryKey: ["SpecializeFilterItem"],
    queryFn: () => apiGetSpecializeFilterItem(),
  });

  const { data: dataDegree } = useQuery<IFilterItemRes[]>({
    queryKey: ["DegreeFilterItem"],
    queryFn: () => apiGetDegreeFilterItem(),
  });

  return (
    <StyledContainer>
      <Sider width={300}>
        <Collapse defaultActiveKey={["1", "2", "3"]}>
          <CollapsePanel header="Giới tính" key="1">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Gender}
              children={[
                { id: 1, name: "Nam" },
                { id: 2, name: "Nữ" },
              ]}
            />
          </CollapsePanel>
          <CollapsePanel header="Chuyên khoa" key="2">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Specialize}
              children={dataSpecialize || []}
            />
          </CollapsePanel>
          <CollapsePanel header="Học vị" key="3">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Degree}
              children={dataDegree}
            />
          </CollapsePanel>
        </Collapse>
      </Sider>
    </StyledContainer>
  );
}

export default MainSider;
