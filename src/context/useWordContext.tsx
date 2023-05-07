import * as React from "react";
import { IWord } from "../components/molecules/NewWord";
import { ReactNode, useCallback, useContext, useState } from "react";

export interface IWordContextData {
  box1: IWord[];
  box2: IWord[];
  box3: IWord[];
  box4: IWord[];
  box5: IWord[];
}
export interface IWordContext {
  data: IWordContextData;
  onAdd?: (name: keyof IWordContextData, value: IWord) => void;
  onDelete?: (name: keyof IWordContextData, value: IWord, index: number) => void;
  onEdit?: (name: keyof IWordContextData, value: IWord, index: number) => void;
}

const defaultValue: IWordContextData = {
  box1: [],
  box2: [],
  box3: [],
  box4: [],
  box5: [],
};
export const WordContext = React.createContext<IWordContext>({
  data: defaultValue,
});

export const WordContextProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [value, setValue] = useState<IWordContextData>(defaultValue);

  const onAdd = useCallback(
    (name: keyof IWordContextData, val: IWord) => {
      const newValue = { ...value };
      newValue[name].push(val);
      setValue(newValue);
    },
    [value]
  );

  const onEdit = useCallback(
    (name: keyof IWordContextData, val: IWord, index: number) => {
      const newValue = { ...value };
      newValue[name][index] = val;
      setValue(newValue);
    },
    [value]
  );
  const onDelete = useCallback(
    (name: keyof IWordContextData, val: IWord, index: number) => {
      const newValue = { ...value };
      newValue[name] = newValue[name].filter((_, idx) => idx !== index);
      setValue(newValue);
    },
    [value]
  );

  return (
    <WordContext.Provider
      value={{
        data: value,
        onAdd,
        onEdit,
        onDelete,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWordContext = () => useContext<IWordContext>(WordContext);
