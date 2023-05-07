import * as React from "react";
import { Text, Input as InputChakra, Box } from "@chakra-ui/react";
import { TName } from "../molecules/NewWord";
import { useCallback } from "react";

export interface IInputProps {
  title?: string;
  name: TName;
  value?: string;
  onChange: (name: string, value: string) => void;
}

export const InputComponent = (props: ReturnType<typeof useInput>) => {
  const { title } = props;
  return (
    <Box>
      <Text>{title}</Text>
      <InputChakra {...props} />
    </Box>
  );
};

export const Input = (props: IInputProps) => <InputComponent {...useInput(props)} />;
export const useInput = (props: IInputProps) => {
  const { name, onChange: onChangeProp } = props;

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeProp(name, e.target.value);
    },
    [name, onChangeProp]
  );
  return {
    ...props,
    onChange,
  };
};
