import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Card } from "../atoms/Card";
import { IWord } from "./NewWord";
import { IWordContextData, useWordContext } from "../../context/useWordContext";
import { useCallback } from "react";

export interface IListBoxProps {
  name: keyof IWordContextData;
  list?: IWord[];
}

const BACKGROUND = ["gray", "blue", "pink", "yellow", "purple"];
const ListBoxWrapper = styled(Box)`
  .list {
    position: relative;
    z-index: 1;
    min-height: 300px;
    width: 300px;
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      opacity: 0.3;
      height: 100%;
      width: 100%;
      border-radius: inherit;
    }
  }
  .list-box1 {
    &:after {
      background: ${BACKGROUND[0 % BACKGROUND.length]};
    }
  }
  .list-box2 {
    &:after {
      background: ${BACKGROUND[1 % BACKGROUND.length]};
    }
  }
  .list-box3 {
    &:after {
      background: ${BACKGROUND[2 % BACKGROUND.length]};
    }
  }
  .list-box4 {
    &:after {
      background: ${BACKGROUND[3 % BACKGROUND.length]};
    }
  }
  .list-box5 {
    &:after {
      background: ${BACKGROUND[4 % BACKGROUND.length]};
    }
  }
`;

export const ListBoxComponent = (props: ReturnType<typeof useListBox>) => {
  const { name, list, onDeleteWord, onEditWord } = props;

  return (
    <ListBoxWrapper>
      <Card className={`list list-${name}`} title={`Box ${name}`}>
        {list?.map((w, index) => (
          <Flex>
            <Text key={index}>{Object.values(w).join("")}</Text>
            <Text onClick={() => onDeleteWord(w, index)}>[D]</Text>
            <Text onClick={() => onEditWord(w, index)}>[E]</Text>
          </Flex>
        ))}
      </Card>
    </ListBoxWrapper>
  );
};

export const ListBox = (props: IListBoxProps) => <ListBoxComponent {...useListBox(props)} />;
export const useListBox = (props: IListBoxProps) => {
  const { name } = props;
  const { onDelete, onEdit } = useWordContext();

  const onDeleteWord = useCallback(
    (word: IWord, index: number) => {
      console.log("[D]", word, index);
      onDelete(name, word, index);
    },
    [name, onDelete]
  );
  const onEditWord = useCallback(
    (word: IWord, index: number) => {
      console.log("[E]", word, index);
      onEdit(name, word, index);
    },
    [name, onEdit]
  );

  return {
    ...props,
    onDeleteWord,
    onEditWord,
  };
};
