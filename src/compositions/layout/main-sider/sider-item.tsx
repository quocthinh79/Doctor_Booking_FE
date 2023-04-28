import { CheckableTag, Flex } from "@components";
import { EWrapFlex, IFilterItemRes } from "@core";
import { SelectedTagsProps } from "@hooks";

export interface SiderItemProps {
  label: string;
  children?: IFilterItemRes[];
  selectedTags: SelectedTagsProps;
  handleChange: any;
}

export function SiderItem({
  selectedTags,
  handleChange,
  label,
  children = [],
}: SiderItemProps) {
  return (
    <Flex wrap={EWrapFlex.Wrap} gap={10}>
      {children?.map(({ id, name }, index) => (
        <CheckableTag
          key={name}
          checked={selectedTags?.[label]?.includes(name)}
          onChange={(checked) => handleChange(label, name, checked)}
        >
          {name}
        </CheckableTag>
      ))}
    </Flex>
  );
}

export default SiderItem;
