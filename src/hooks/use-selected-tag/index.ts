import {} from "@core";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type SelectedTagsProps = { [label: string]: string[] };

export interface UseSelectedTag {
  selectedTags: SelectedTagsProps;
  handleChange: (label: string, tag: string, checked: boolean) => void;
}

export function useSelectedTag(): UseSelectedTag {
  const selected: SelectedTagsProps = {};
  const [selectedTags, setSelectedTags] = useState<SelectedTagsProps>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const url = new URL(window.location.href);
  const currentSearchParams = url.searchParams;

  useEffect(() => {
    Array.from(currentSearchParams).map((item) => {
      selected[item[0]] = item[1].split(",");
    });
    setSelectedTags(selected);
  }, [window.location.href]);

  const handleChange = (label: string, tag: string, checked: boolean) => {
    if (checked) {
      selected[label] = [
        // ...(selectedTags[label] || []),
        tag,
      ];
    } else {
      selected[label] = [
        ...(selectedTags[label]?.filter((item) => item !== tag) || []),
      ];
    }
    Object.entries(selected).map((item, index) => {
      if (item[1].length === 0) {
        searchParams.delete(item[0]);
      } else {
        searchParams.set(item[0], item[1].join(","));
      }
    });
    setSearchParams(searchParams);
    setSelectedTags({ ...selectedTags, ...selected });
  };

  return {
    selectedTags,
    handleChange,
  };
}

export default useSelectedTag;
