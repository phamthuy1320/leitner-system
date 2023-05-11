import * as React from "react";
import { Props } from "react-select";
import { useMemo } from "react";
import ReactSelect from "react-select";

export interface ISelectProps extends Props {}

export const SelectComponent = (props: ReturnType<typeof useSelect>) => {
  return <ReactSelect {...props} menuPlacement={"auto"} />;
};

export const Select = (props: ISelectProps) => {
  return <SelectComponent {...useSelect(props)} />;
};

export const useSelect = (props: ISelectProps) => {
  const options: Props<any, any, any>["options"] = useMemo(
    () =>
      Array(30)
        .fill("")
        .map((_, index) => ({ label: `label-${index}`, value: `value-${index}` })),
    []
  );
  return {
    ...props,
    options,
  };
};
