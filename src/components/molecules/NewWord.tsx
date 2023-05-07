import * as React from "react";
import { Input } from "../atoms/Input";
import { Button, HStack } from "@chakra-ui/react";
import { Card } from "../atoms/Card";
import { useCallback, useState } from "react";
import { useWordContext } from "../../context/useWordContext";

export interface IWord {
  newWord: string;
  pronunciation: string;
  meaning: string;
}

export type TName = keyof IWord;

export const NewWordComponent = (props: ReturnType<typeof useNewWord>) => {
  const { word, onChange, onAddNewWord } = props;
  const { newWord, pronunciation, meaning } = word;

  return (
    <form onSubmit={onAddNewWord}>
      <Card footer={<Button type={"submit"}>Add New Word</Button>}>
        <HStack spacing={1}>
          <Input title={"New Word"} name={"newWord"} value={newWord} onChange={onChange} />
          <Input title={"Pronunciation"} name={"pronunciation"} value={pronunciation} onChange={onChange} />
          <Input title={"Meaning"} name={"meaning"} value={meaning} onChange={onChange} />
        </HStack>
      </Card>
    </form>
  );
};

export const NewWord = () => <NewWordComponent {...useNewWord()} />;

const defaultValue: IWord = {
  newWord: "",
  pronunciation: "",
  meaning: "",
};

export const useNewWord = () => {
  const [word, setWord] = useState<IWord>(defaultValue);
  const { onAdd } = useWordContext();

  const onChange = useCallback(
    (name: TName, value: string) => {
      const newWord = { ...word };
      newWord[name] = value;
      setWord(newWord);
    },
    [word]
  );

  const onAddNewWord = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAdd("box1", word);
    },
    [onAdd, word]
  );

  return {
    word,
    onChange,
    onAddNewWord,
  };
};
